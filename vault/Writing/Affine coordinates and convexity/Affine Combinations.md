---
publish: true
title: Affine Combinations
subject: Affine coordinates and convexity
slug: affine-combinations
status: Working note
order: 50
description: When a linear combination of points is independent of the choice of origin.
---

## Linear Combinations of Points

Given an affine space $\mathcal{A}:=(A,\vec{A},+,-)$, choosing an origin $o\in A$ defines the bijection

$$
\phi_o:A\to\vec{A};\qquad p\mapsto p-o.
$$

This becomes a vector space isomorphism when $A$ is endowed with the induced vector space structure, defined by

$$
\forall \lambda,\mu\in\mathbb{R},\ \forall p,q\in A,\qquad \lambda p+_o\mu q :=\phi_o^{-1}\bigl(\lambda\phi_o(p)+\mu\phi_o(q)\bigr).
$$

Equipped with such a structure on $A$, we may construct arbitrary linear combinations: for any points $p_1,\ldots,p_k\in A$ and scalars $\lambda_1,\ldots,\lambda_k\in\mathbb{R}$, we define

$$
p_o:=\left(\sum_{i=1}^{k}\lambda_i p_i\right)_o :=\phi_o^{-1}\left(\sum_{i=1}^{k}\lambda_i\phi_o(p_i)\right) =o+\sum_{i=1}^{k}\lambda_i(p_i-o),
$$

where the subscript $o$ indicates that the sum uses the vector space structure induced by $o$.

Since the induced vector space operations on $A$ depend on the chosen origin, this sum generally depends on that choice. This can be explicitly seen by choosing a different origin
$o'\in A$.

Using the same points and coefficients, we could alternatively form the linear combination

$$
p_{o'}:=\left(\sum_{i=1}^{k}\lambda_i p_i\right)_{o'}=o'+\sum_{i=1}^{k}\lambda_i(p_i-o').
$$

Taking their difference then gives

$$
\begin{aligned}
p_o-p_{o'} &=\left(o+\sum_{i=1}^{k}\lambda_i(p_i-o)\right)-\left(o'+\sum_{i=1}^{k}\lambda_i(p_i-o')\right)\\
&=(o-o')+\sum_{i=1}^{k}\lambda_i\bigl((p_i-o)-(p_i-o')\bigr)\\
&=(o-o')+\sum_{i=1}^{k}\lambda_i(o'-o)\\
&=\left(1-\sum_{i=1}^k\lambda_i\right)(o-o').
\end{aligned}
$$

Defining $$s:=\sum_{i=1}^{k}\lambda_i,$$we can conclude then that

$$
p_o-p_{o'}=(1-s)(o-o'),
$$

which is zero precisely when $o=o'$ or $s=1$.

## Affine Combinations of Points

### Definition and Requirements

Given points $p_1,\ldots,p_k\in A$ and scalars $\lambda_1,\ldots,\lambda_k\in\mathbb{R}$, we found that their linear combinations with respect to origins $o$ and $o'$ satisfy

$$
p_o-p_{o'}=\left(1-\sum_{i=1}^{k}\lambda_i\right)(o-o').
$$

Consequently, given scalars such that

$$
\sum_{i=1}^{k}\lambda_i=1,
$$

any linear combination of points weighted by those scalars may be unambiguously written as

$$
p=\sum_{i=1}^{k}\lambda_i p_i,
$$

independently of the chosen origin.

We call such a linear combination an affine combination to distinguish it from the more general case with arbitrary coefficients, and write it with no subscript  to denote it's origin independence.

### Construction of Affine Combinations

While not every linear combination of points with respect to some origin is an affine combination itself, every linear combination does possess an affine representation which may be obtained by enlarging the set we sum over to include the origin.

More explicitly, given points $p_1,\ldots,p_k\in A$, arbitrary scalars $\lambda_1,\ldots,\lambda_k\in\mathbb{R}$, and some chosen origin $o\in A,$ we may set $p_0:=o$ and define a zeroth coefficient by

$$
\lambda_0:=1-\sum_{i=1}^{k}\lambda_i.
$$

Using our identification of $A$ with $\vec{A}$, the original linear combination is

$$
\begin{aligned}
p&:=\left(\sum_{i=1}^{k}\lambda_i p_i\right)_{p_0}\\
&=p_0+\sum_{i=1}^{k}\lambda_i(p_i-p_0)\\
&=p_0+\sum_{i=0}^{k}\lambda_i(p_i-p_0)\\
&=\left(\sum_{i=0}^{k}\lambda_i p_i\right)_{p_0},
\end{aligned}
$$

where we have included the $i=0$ term since $p_0-p_0=0$.

Since

$$
\sum_{i=0}^{k}\lambda_i=\left(1-\sum_{i=1}^{k}\lambda_i\right)+\sum_{i=1}^{k}\lambda_i=1,
$$

this enlarged combination is independent of the origin used to evaluate it. We may therefore omit the subscript and write

$$
p=\sum_{i=0}^{k}\lambda_i p_i.
$$
## Composition

Given a set of points $$S:=\{ p_{0},p_{1},\dots,p_{k} \}$$
and a set of affine combinations of those points $$T:=\{ q_{0},q_{1},\dots,q_{\ell} \}$$
where each $q_{j}$ is defined as $$q_{j}=\sum_{{i=0}}^k\lambda_{ij}p_{i},\quad\sum_{i=0}^k\lambda_{ij}=1,$$
we can show that any affine combination of the elements of $T$ is itself an affine combination of the elements of $S$, and therefore that the composition of affine combinations is an affine combination. 

Starting with some arbitrary combination  $$x=\sum_{j=0}^\ell\mu_{{j}}q_{j},\quad\sum_{{j=0}}\mu_{j}=1,$$we may expand this expression in terms of the elements of $S$ (assuming that the sum is well defined for now) like

$$\begin{align}
x&=\sum_{j=0}^\ell\mu_{j}\sum_{i=0}^k\lambda_{ij}p_{i} \\
&=\sum_{i=0}^k\sum_{j=0}^\ell(\mu_{j}\lambda_{ij})p_{i}.
\end{align}$$
Defining $$\xi_{i}=\sum_{j=0}^\ell \mu_{j}\lambda_{ij},$$
we can see that $$\begin{align}
\sum_{i=0}^k\xi_{i}&=\sum_{j=0}^\ell\sum_{i=0}^k \mu_{j}\lambda_{ij} \\
&=\sum_{j=0}^\ell \mu_{j}\sum_{i=0}^k \lambda_{ij} \\
&=\sum_{j=0}^\ell \mu_{j} \\
&=1 
\end{align}$$
and
$$x=\sum_{i=0}^k\xi_{i}p_{i}.$$
As the sum of the coefficients is $1,$ this expression is independent of the choice of origin and is thus a valid affine combination. Hence we may conclude that the composition of affine combinations is itself an affine combination.
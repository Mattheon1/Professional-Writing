---
publish: true
title: Affine Independence
subject: Affine coordinates and convexity
slug: affine-independence
status: Working note
order: 70
description: Characterizing independence through the uniqueness of affine combinations.
---

### Linear Independence

Given a vector space $V$ and a set of vectors $$S:=\{v_1,\dots,v_k\}\subseteq V,$$ we say that the elements of $S$ are linearly independent if and only if the only linear combination satisfying

$$
\sum_{i=1}^k\lambda_i v_i=0
$$

is the trivial one, meaning that $\lambda_1=\cdots=\lambda_k=0$.

An equivalent condition that may be derived from this is that for every $v_j\in S$,

$$
\sum_{i=1}^k\lambda_i v_i=v_j
$$

if and only if $\lambda_j=1\ \text{and}\ \forall i\neq j,\ \lambda_i=0$.

### Affine Independence via Affine Combinations

In parallel with this definition, given an affine space $\mathcal{A}:=(A,\vec{A},+,-)$ and a set of points
$$S:=\{p_0,\dots,p_k\}\subseteq A,$$we say that the points of $S$ are *affinely* independent when, for every $p_j\in S$, the only [[Affine Combinations|affine combination]] satisfying

$$
\sum_{i=0}^k\lambda_i p_i=p_j
$$

is the trivial one ($\lambda_j=1$ and $\forall i\neq j,\ \lambda_i=0$).

This definition has an additional consequence concerning the uniqueness of affine representations: a set of points $S$ is affinely independent if and only if every element of its [[Affine Hull|affine hull]] possess a unique affine representation.

To show that this is true, suppose $S$ is affinely independent and $q\in\operatorname{Aff}(S)$ has affine representations

$$
q=\sum_{i=0}^k\lambda_i p_i=\sum_{i=0}^k\lambda'_i p_i.
$$

Then

$$
\begin{aligned}
0=q-q &=\left(p_0+\sum_{i=0}^k\lambda_i(p_i-p_0)\right)-\left(p_0+\sum_{i=0}^k\lambda'_i(p_i-p_0)\right)\\
&=\sum_{i=0}^k(\lambda_i-\lambda'_i)(p_i-p_0).
\end{aligned}
$$

Writing $c_i:=\lambda_i-\lambda'_i$, we can then conclude

$$
\sum_{i=0}^k c_i(p_i-p_0)=0
$$

and

$$
\sum_{i=0}^k c_i=\sum_{i=0}^k\lambda_i-\sum_{i=0}^k\lambda'_i=1-1=0.
$$

Assuming then that the representations are distinct, there must exist some $c_j\neq0$. Since $$\sum_{i=0}^k c_i=0,$$we may choose such a coefficient with $j\neq0,$ and manipulate our expression for the zero vector to get

$$
p_j-p_0=-\frac{1}{c_j}\sum_{i\neq j} c_i(p_i-p_0),
$$

and therefore

$$
p_j=p_0-\frac{1}{c_j}\sum_{i\neq j} c_i(p_i-p_0).
$$

Once again as $$\sum_{i=0}^k c_i=0,$$we can conclude that

$$
c_j=-\sum_{i\neq j} c_i,
$$

and therefore

$$
-\frac{1}{c_j}\sum_{i\neq j} c_i=1.
$$

Thus

$$
p_j=p_0-\frac{1}{c_j}\sum_{i\neq j} c_i(p_i-p_0)
$$

is a non-trivial affine representation of $p_j$, contradicting our assumption that $S$ is affinely independent.

Consequently, the two representations of $q$ must coincide when $S$ is affinely independent.

As $q\in\operatorname{Aff}(S)$ was arbitrary, every point in the affine hull of an affinely independent set must therefore possess a unique representation.

Taking the converse, suppose every point $q\in\operatorname{Aff}(S)$ has a unique affine representation. Equivalently, there exists no $q\in\operatorname{Aff}(S)$ possessing multiple affine representations.

Since $S\subseteq\operatorname{Aff}(S)$, this applies to every $p_j\in S$ as well. As each $p_j$ already possesses its trivial affine representation, this must be its only representation.

Thus, by our definition of affine independence, $S$ is affinely independent, and we may also conclude that uniqueness of affine representations and affine independence are equivalent conditions.

## Affine Independence via Linear Independence

An equivalent characterization of affine independence is to say that given an affine space 
$\mathcal{A}:=(A,\vec{A},+,-)$ and a set of points $$S:=\{p_0,\dots,p_k\}\subset A,$$the points of $S$ are affinely independent if and only if the set of displacement vectors

$$  
\vec{S}:=\{(p_1-p_0),\dots,(p_k-p_0)\}\subset \vec{A}  
$$

is linearly independent.

This result follows from the theorem established in the previous section: that a set is affinely independent if and only if every point in its affine hull has a unique affine representation.

Assuming $S$ is affinely independent, every point $p\in\operatorname{Aff}(S)$ has a unique affine representation

$$  
p=\sum_{i=0}^k\lambda_i p_i.  
$$

Subtracting $p_0$ from both sides, and using the condition $\displaystyle\sum_{i=0}^k\lambda_i=1$, gives

$$  
\begin{align}
p-p_0&=\left( \sum_{i=0}^k\lambda_ip_i \right) -p_0 \\
&=\left( \sum_{i=0}^k\lambda_ip_i \right) -\sum_{j=0}^k\lambda_{j}p_0 \\
&= \sum_{i=0}^k\lambda_i(p_i  -p_0)
\end{align}  
$$

As $p_0-p_0=0$, we may omit the zeroth term to obtain

$$  
p-p_0=\sum_{i=1}^k\lambda_i(p_i-p_0).  
$$

Since the zeroth affine coefficient is uniquely determined by the remaining coefficients through

$$  
\lambda_0=1-\sum_{i=1}^k\lambda_i,  
$$

every affine representation of $p$ corresponds uniquely to a linear representation of its displacement vector $p-p_0$ in terms of $\vec{S}$.

Conversely, every linear combination of the vectors in $\vec{S}$ determines an affine combination of the points in $S$ by adjoining the zeroth coefficient as above. Thus uniqueness of representations in either case is equivalent to uniqueness in the other.

As $p$ was arbitrary, and every linear combination of the vectors in $\vec{S}$ corresponds to some point in $\operatorname{Aff}(S)$, we can conclude that $S$ is affinely independent if and only if every vector in the span of $\vec{S}$ possesses a unique linear representation in terms of $\vec{S}$, which is equivalent to linear independence of $\vec{S}$.

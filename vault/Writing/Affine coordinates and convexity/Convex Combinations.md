---
publish: true
title: Convex Combinations
subject: Affine coordinates and convexity
slug: convex-combinations
status: Working note
order: 100
description: What changes when the coefficients of an affine combination must be nonnegative.
---

## Convex Combinations of Points

Given an affine space $\mathcal{A}:=(A,\vec{A},+,-)$ and a set of points $$S:=\{ p_{0},p_{1}\dots p_{k} \},$$
an [[Affine Combinations|affine combination]] of the elements of $S$ is an origin independent linear combination of points

$$\sum_{i=0}^k\lambda_{i}p_{i}$$
such that $\displaystyle\sum_{i=0}^k\lambda_{i}=1.$

In most applications, $\lambda_{0}$ is constrained by the equation $$\lambda_{0}=1-\sum_{i=1}^k\lambda_{i}$$
while the other coefficients are allowed to freely range over $\mathbb{R},$ which includes taking on negative values on values greater than $1$. However restricting ourselves to the subset of affine combinations satisfying $\forall0\leq i\leq k,\,\, \lambda_{i}\geq0$ gives us a subclass of affine combinations known as convex combinations.

## Composition

Just as the composition of affine combinations is itself an affine combination, the composition of convex compositions is a convex composition. The proof of this is relatively similar to the corresponding [[Affine Combinations#Composition|proof for affine combinations]], merely replacing the word affine with convex.

Formally, given a set of points $$S:=\{ p_{0},\dots,p_{k} \}$$
and a set of convex combinations of those points
$$T:=\{ q_{0},q_{1},\dots,q_{\ell} \}$$
with each $q_{j}$ defined by $$q_{j}=\sum_{i=0}^k\lambda_{ij}p_{i},\quad\sum_{i=0}^k\lambda_{ij}=1,\quad \forall0\leq i\leq k,\,\,\lambda_{i}\geq0,$$
every convex combination $x$ of the elements of $T$ may be written as $$x=\sum_{j=0}^\ell \mu_{j}q_{j},\quad \sum_{j=0}^\ell \mu_{j}=1,\quad\forall0\leq j\leq \ell,\,\,\mu_{j}\geq0$$
Expressing this in terms of the points $p_{i}$ then gives
$$\begin{align}
x&=\sum_{j=0}^\ell \mu_{j}\sum_{i=0}^k\lambda_{ij}p_{i} \\
&=\sum_{i=0}^k\sum_{j=0}^\ell(\mu_{j}\lambda_{ij})p_{i}.
\end{align}$$
Defining $$\xi_{i}=\sum_{j=0}^\ell \mu_{j}\lambda_{ij},$$
we already know that $$\sum_{i=0}^k\xi_{i}=1,$$however in addition to this, every $\xi_{i}$ must also satisfy $\xi_{i}\geq{0},$ as it is the sum of products of non-negative coefficients, which is always non-negative. 

Thus using the fact that $$x=\sum_{i=0}^k\xi_{i}p_{i},\quad\sum_{i=0}^k\xi_{i}=1,\quad\forall0\leq i\leq k,\,\,\xi_{i}\geq0,$$
we may conclude that $x$ is itself a convex combination of the elements of $S$

## Convexity

To understand the basic properties of convex combinations, we can start with understanding how this constraint actually affects our allowed affine combinations.

Given $\lambda_{i}\geq0$ for all $0\leq i\leq k$ and $\displaystyle\sum_{i=0}^k\lambda_{i}=1$, for each $\lambda_{i}$ we may derive

$$
\lambda_{i}=1-\sum_{j\neq i}\lambda_{j}\geq0.
$$

As each $\lambda_{j}$ is individually non-negative, $\displaystyle\sum_{j\neq i}\lambda_{j}$ must itself be non-negative, and therefore $\lambda_i$ must be less than or equal to 1.

Thus we can conclude that for arbitrary $\lambda_{i}$,

$$
1\geq\lambda_{i}\geq0.
$$

In order to see the geometric consequences of this, it's best to start with the case when $k=1$.

Let $$S_{1}:=\{p_{0},p_{1}\},$$ and $$p:=\lambda_{0}p_{0}+\lambda_{1}p_{1}$$be an arbitrary convex combination of the elements of $S_1$.

Choosing $p_{0}$ as our origin, we may evaluate this combination as

$$
p=p_{0}+\lambda_{1}(p_{1}-p_{0}).
$$

As $p$ was stated to be a convex combination, $\lambda_{1}$ may take on any value from $\lambda_{1}=0$ 
(where $p=p_{0}$), to $\lambda_{1}=1$ (where $p=p_{1}$), and thus every convex combination $p$ must lie on the line segment connecting the two endpoints, making the [[Convex Hulls and Simplices|convex hull]]  of $S_1$ in fact convex.

For $k=2$, and a set of points $$S_{2}:=\{p_{0},p_{1},p_{2}\},$$we may once again define an arbitrary convex combination $$p:=\lambda_{0}p_{0}+\lambda_{1}p_{1}+\lambda_{2}p_{2},$$however this time the coefficients don't immediately tell us where $p$ is relative to the points of $S_2$.

Rather than directly evaluate this expression with respect to $p_{0}$, we may first define (assuming $\lambda_{0}+\lambda_{1}>0$)

$$
\mu_1=\lambda_{0}+\lambda_{1},\qquad q_1=\frac{\lambda_{0}}{\mu_1}p_{0}+\frac{\lambda_{1}}{\mu_1}p_{1},
$$

and rewrite $p$ as the new convex combination

$$
p=\mu_1q_1+\lambda_{2}p_{2}.
$$

As $\mu_1=\lambda_{0}+\lambda_{1}>0$, and both coefficients are non-negative, we have

$$
0\leq\frac{\lambda_{0}}{\mu_1}\leq1,\qquad 0\leq\frac{\lambda_{1}}{\mu_1}\leq1.
$$

Furthermore, their sum is

$$
\frac{\lambda_{0}}{\mu_1}+\frac{\lambda_{1}}{\mu_1}=\frac{\lambda_{0}+\lambda_{1}}{\mu_1}=1.
$$

Thus $q_1$ is itself a convex combination of $p_{0}$ and $p_{1}$ (possibly being equal to either), and therefore lies on the line segment connecting them.

Returning to our expression for $p$, we can see that $\mu_1+\lambda_2=1$, with both coefficients non-negative. Consequently, $p$ is a convex combination of $q_1$ and $p_2$, and therefore lies on the line segment connecting these two points.

In the case $\mu_1=0$, we have $p=p_2$, so this conclusion still holds, taking $q_1=p_1$.

Thus every convex combination of three points may be constructed by first choosing a point $q_1$ on the line segment connecting $p_0$ and $p_1$, and then choosing a point $p$ on the line segment connecting $q_1$ and $p_2$.

Conversely, given any point $q_1$ on the line segment connecting $p_0$ and $p_1$, we may write it as a convex combination

$$
q_1=(1-\alpha)p_0+\alpha p_1,\qquad 0\leq\alpha\leq1.
$$

For any point $p$ on the line segment connecting $q_1$ and $p_2$, we may similarly write it as a convex combination of $q_1$ and $p_2$ like

$$
p=(1-\beta)q_1+\beta p_2,\qquad 0\leq\beta\leq1.
$$

Substituting our expression for $q_1$, we obtain

$$
p=(1-\beta)(1-\alpha)p_0+(1-\beta)\alpha p_1+\beta p_2.
$$

As each coefficient is non-negative, and their sum is

$$
(1-\beta)(1-\alpha)+(1-\beta)\alpha+\beta=1,
$$

$p$ is itself a convex combination of the original three points.

Thus the [[Convex Hulls and Simplices|set of all convex combinations]] of three points is precisely the area swept out by the line segments connecting $p_{2}$ to $q_1$ as $q_1$ varies along the segment connecting $p_0$ and $p_1$.

## General Derivation

This approach also works in general for $k\gt2:$ letting $$S=\{ p_{0},p_{1},\dots,p_{k} \}$$
and $$p:=\sum_{i=0}^k\lambda_{i}p_{i},\quad \lambda_{i}\geq0,\quad\sum_{i=0}^k\lambda_i=1$$
we may define $$\mu_{0}=\lambda_{0},\quad q_{0}=p_{0},\quad\mu_{i}+\mu_{i-1}+\lambda_i,\quad q_{i}=\frac{\mu_{i-1}}{\mu_i}q_{i-1}+\frac{\lambda_i}{\mu_i}p_i,$$
for each $1\leq i\leq k$ satisfying $\mu_i\neq0$.

By the same reasoning as before,

$$0\leq\frac{\mu_{i-1}}{\mu_i}\leq1,\quad0\leq\frac{\lambda_i}{\mu_i}\leq1,\quad\frac{\mu_{i-1}}{\mu_i}+\frac{\lambda_i}{\mu_i}=1$$

and thus $q_i$ is a convex combination of $q_{i-1}$ and $p_i$, lying on the line segment connecting them. Furthermore,

$$p=\mu_iq_i+\sum_{j=i+1}^{k}\lambda_jp_j.$$

Once again, when $\mu_i=0$, we may instead take $q_i=p_i$, preserving the expression for $p$.

For $i=k,$ we thus have

$$p=\mu_kq_k=q_k,$$

since $\mu_k=\displaystyle\sum_{j=0}^k\lambda_j=1$.

Thus every convex combination of $k+1$ points may be constructed through successive convex combinations of two points, beginning with $q_0=p_0$ and ending with $q_k=p$.





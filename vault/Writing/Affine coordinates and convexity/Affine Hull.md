---
publish: true
title: Affine Hull
subject: Affine coordinates and convexity
slug: affine-hull
status: Working note
order: 60
description: The affine subspace spanned by a collection of points.
---

Given an $N$ dimensional affine space $\mathcal{A}:=(A,\vec{A},+,-)$ and a set of points $$S:=\{ p_{0},\dots,p_{k} \}\subset A,$$the affine hull of $S$ is defined as the set of all [[Affine Combinations|affine combinations]] of the points, or more explicitly $$\operatorname{Aff}(S)=\left\{  \sum_{i=0}^k \lambda_{i}p_{i}:\sum_{i=0}^k\lambda_{i}=1 \right\}.$$
Choosing $p_{0}$ as the origin, we can realize the affine hull as an affine subspace of dimension $\operatorname{dim}\operatorname{span}\{ (p_{1}-p_{0}),\dots,(p_{k}-p_{0}) \}$ by writing
$$\begin{align}
\operatorname{Aff}(S)&=\left\{  \sum_{i=0}^k \lambda_{i}p_{i}:\sum_{i=0}^k\lambda_{i}=1 \right\} \\
&=\left\{  p_{0}+\sum_{i=1}^k \lambda_{i}(p_{i}-p_{0}):\lambda_{i}\in \mathbb{R} \right\} \\
&=p_{0}+\operatorname{span}\{ (p_{1}-p_{0}),\dots,(p_{k}-p_{0}) \}.
\end{align}$$
### As a Minimal Affine Subspace
This subspace is unique among affine subspaces of $A$, in that it is the smallest such subspace containing $S$. 

To see this, let $V\subseteq A$ be any affine subspace also containing $S$. Then $p_0\in V$, so we may write $V=p_0+\vec V$, where $$\vec V=\{ p-p_{0}:p\in V \} $$
Since $S\subset V$, each displacement $p_{i}-p_{0}$ belongs to $\vec V$, and As $\vec V\subset \vec{A}$ is a vector subspace, it is closed under the taking of linear combinations, meaning
$$
\operatorname{span}\{p_1-p_0,\dots,p_k-p_0\}\subseteq\vec V.
$$
Thus
$$
\operatorname{Aff}(S)
=p_0+\operatorname{span}\{p_1-p_0,\dots,p_k-p_0\}
\subseteq p_0+\vec V
=V.
$$


## Closure

As the compositions of affine combinations are themselves affine combinations, the affine hull of a set of points $S$ is closed under the taking of affine combinations.

Geometrically, we may interpret this as a reflection of the fact that every affine hull is itself an affine subspace.

Letting $$S:=\{ p_{0},p_{1},\dots,p_{k} \}$$
be an arbitrary set of points, we already know that $$\operatorname{Aff}(S)=p_0+\vec{V},$$
where the space of displacements is given by $$\vec{V}=\operatorname{span}\{p_1-p_0,\dots,p_k-p_0\}.$$
As affine spaces are closed under action by elements of $\vec{V}$, given any point $p\in\operatorname{Aff}(S)$ and vector $v\in \vec{V}$, $p+v\in \operatorname{Aff}(S)$ as well.

Since any affine combination of points $q_{0},q_{1},\dots,q_{\ell}\in\operatorname{Aff}(S)$ may be expressed in the form

$$\sum_{i=0}^\ell \lambda_{i}q_{i}=q_{0}+\sum_{i=1}^\ell \lambda_{i}(q_{i}-q_{0}),$$
where each $(q_{i}-q_{0})\in \vec{V},$ then we may conclude that $$\displaystyle\sum_{i=1}^\ell \lambda_{i}(q_{i}-q_{0})\in \vec{V}$$ and therefore 
$$\sum_{i=0}^\ell \lambda_{i}q_{i}\in\operatorname{Aff}(S).$$
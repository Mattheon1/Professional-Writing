---
publish: true
title: Notation
slug: notation
subject: Affine geometry
status: Reference
description: Background notation and conventions used throughout the affine geometry series.
order: 25
---

## Notation

Background notation used throughout this series. Notation introduced within an article is defined there.

| Notation                                            | Meaning                                                  |
| --------------------------------------------------- | -------------------------------------------------------- |
| **Sets and maps**                                   |                                                          |
| $f:X\to Y;\ x\mapsto f(x)$                          | a map, see [[#Maps]]                                     |
| $:=$                                                | definition                                               |
| $\operatorname{id}_X$                               | identity map on $X$                                      |
| $g\circ f$                                          | map composition, applying $f$ first                      |
| $Y^X$                                               | set of maps $X\to Y$                                     |
| $f(S)$, $f^{-1}(T)$                                 | image, preimage                                          |
| $f\vert_S$                                          | restriction to $S$                                       |
| corestriction                                       | see [[#Maps]]                                            |
| $f\times g$                                         | product map, see [[#Maps]]                               |
| $(x_i)_{i\in I}$                                    | the map $I\to X;\ i\mapsto x_i$                          |
| $\lvert S\rvert$                                    | cardinality of a set $S$                                 |
| $[x]$, $X/\!\sim$                                   | equivalence class, set of equivalence classes            |
| $\mathbb{N}$, $\mathbb{N}_0$                        | $\{1,2,3,\dots\}$, $\mathbb{N}\cup\{0\}$                 |
| **Weights**                                         |                                                          |
| $\operatorname{supp}\lambda$                        | support of a function, see [[#Weights]]                  |
| $R^{(S)}$                                           | weight functions on $S$                                  |
| $\sum\lambda$                                       | total weight                                             |
| **Linear algebra**                                  |                                                          |
| $\mathbb{F}$, $R$                                   | a field, a (unital) ring                                 |
| ordered field                                       | field with a total order compatible with $+$ and $\cdot$ |
| $\operatorname{span}S$                              | finite linear combinations of $S$                        |
| $\dim$                                              | dimension                                                |
| $V\oplus W$                                         | direct sum                                               |
| $\mathcal{L}(V,W)$                                  | linear maps $V\to W$                                     |
| $\operatorname{End}(V)$, $\operatorname{GL}(V)$     | $\mathcal{L}(V,V)$, its invertible elements              |
| $V^*$                                               | dual space $\mathcal{L}(V,\mathbb{F})$                   |
| $\ker L$, $\operatorname{im}L$                      | kernel, image                                            |
| $\mathbb{F}^N$, $(e_i)_{i=1}^N$                     | coordinate space, standard basis                         |
| $\mathbb{F}^{m\times n}$                            | $m$ by $n$ matrices                                      |
| **Groups** $\star$                                  |                                                          |
| $H\leq G$, $N\trianglelefteq G$                     | subgroup, normal subgroup                                |
| $G/N$                                               | quotient group                                           |
| $1\to N\to G\to Q\to1$                              | $N$ normal in $G$ with $G/N\cong Q$, see [[#Exact Sequences]] |
| **Topology**                                        |                                                          |
| $(X,\mathcal{O}_X)$                                 | topological space with topology $\mathcal{O}_X$          |
| $\overline{S}$, $\operatorname{int}S$, $\partial S$ | closure, interior, boundary                              |
| $\lVert v\rVert$                                    | norm                                                     |
| $B_\epsilon(x)$                                     | open ball of radius $\epsilon$ about $x$                 |

#### Maps

Displayed maps name their domain and codomain first, and then their action on an arbitrary element:
$$
\begin{aligned}
f:X&\to Y; \\
x&\mapsto f(x).
\end{aligned}
$$
Restricting the codomain of $f$ to a set containing its image is called corestriction. The product of $f$ with a map $g:X'\to Y'$ is
$$
\begin{aligned}
f\times g:X\times X'&\to Y\times Y'; \\
(x,x')&\mapsto\bigl(f(x),g(x')\bigr).
\end{aligned}
$$

#### Weights

The support of a map $\lambda:S\to R$ is the set
$$
\operatorname{supp}\lambda:=\{p\in S:\lambda(p)\neq0\}.
$$
A weight function on $S$ is such a map $\lambda$ with finite support, with values written $\lambda_p:=\lambda(p)$, and the set of weight functions on $S$ is written $R^{(S)}$. Where the context calls for it, a real weight function may instead have countable support, provided $\sum_{p\in S}\lvert\lambda_p\rvert$ converges.

The total weight of $\lambda$, and any sum such as $\sum_{p\in S}\lambda_p p$, is taken over $\operatorname{supp}\lambda$, as in
$$
\sum\lambda:=\sum_{p\in\operatorname{supp}\lambda}\lambda_p.
$$
These are finite sums, or in the countable case series whose convergence (for sums of points, in the ambient space) is part of the context.

#### Exact Sequences

Exact sequences record how a group is assembled from a normal subgroup and its quotient. A sequence of homomorphisms $G_1\xrightarrow{f_1}G_2\xrightarrow{f_2}G_3$ is exact at $G_2$ when $\operatorname{im}f_1=\ker f_2$. Writing $1$ for the trivial group, exactness of
$$
1\longrightarrow N\xrightarrow{\ \iota\ }G\xrightarrow{\ \pi\ }Q\longrightarrow1
$$
at every term means that $\iota$ is injective, $\pi$ is surjective, and $\iota(N)=\ker\pi$, so that $\iota(N)$ is a normal subgroup of $G$ with $G/\iota(N)\cong Q$. For vector spaces the trivial group is written $0$, and every linear map $L:V\to W$ gives the exact sequence
$$
0\longrightarrow\ker L\longrightarrow V\xrightarrow{\ L\ }\operatorname{im}L\longrightarrow0.
$$

#### Diagrams

Several maps may be collected into a single diagram, with each set written once and each map drawn as an arrow from its domain to its codomain, labeled by its name. Identity maps are drawn as double bars rather than labeled arrows.

A diagram _commutes_ if any two paths of arrows with the same start and end compose to the same map. The square and triangle
![[notation-cd-square-triangle.svg|center|307]]
commute precisely when $k\circ f=g\circ h$ and $g\circ f=h$ respectively.

Two consequences make diagrams useful for reasoning. First, commuting squares can be pasted together: if both squares of
![[notation-cd-pasting.svg|center|208]]
commute, then so does the outer rectangle, as $k'\circ f'\circ f=g'\circ k\circ f=g'\circ g\circ h$. Second, when the vertical maps of a commuting square are bijections, either horizontal map determines the other: in the first square above, $g=k\circ f\circ h^{-1}$.

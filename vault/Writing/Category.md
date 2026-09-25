---
publish: true
title: "Category"
slug: "category"
subject: "Category theory"
status: "Working note"
description: "Objects, morphisms, composition, and identity; an introduction to the language of categories."
order: 10
---

# Definition
A category $\mathcal{C}$ consists of a collection of objects 
$$X,Y,Z,\dots$$
along with a collection of [[Morphism|morphisms]]
$$f,g,h,\dots$$
such that every morphism $f$ has a domain object $X$ and codomain object $Y$, with the relationship between the three being displayed as
$$f:X\to Y.$$
Unlike maps in [[Set Theory]], morphisms do not necessarily take elements of an underlying set to elements of another: the objects in categories can be as abstract or concrete as desired, and the same is true of the morphisms.

In order for this pair of collections to be a category, the existence of objects and morphisms is not enough: specific morphisms and relationships between them must exist as well.

### Composition
For any two morphisms
$$\begin{gather}
f:X\to Y,\\[6pt]
g:Y\to Z,
\end{gather}$$
we require that a third morphism
$$g\circ f:X\to Z$$
exist whenever the domain of one morphism matches the codomain of another.

### Identity
For any object $X$ in $\mathcal{C}$, we require the existence of a special morphism
$$id_{X}:X\to X$$
known as the identity morphism of $X$.

The identity morphism is characterized entirely by its behavior under composition with other morphisms: for any morphism
$$f:X\to Y,$$
the composite morphisms
$$\begin{gather}
f\circ id_{X}:X\to Y,\\[6pt]
id_{Y}\circ f:X\to Y,
\end{gather}$$
must both equal $f$ itself.

This characterization is unique because an object cannot possess multiple identities: if two such morphisms $id_{X}$ and $\widetilde{id}_{X}$  did exist, we could construct the chain of equalities 
$$\begin{aligned}
id_{X}=id_{X}\circ \widetilde{id}_{X}\\=\widetilde{id}_{X}\circ id_{X}\\=\widetilde{id}_{X}
\end{aligned}$$
which tells us any two identities must be the same.


### Associativity
Given composable morphisms 
$$\begin{gather}
f:X\to Y,\\[6pt]g:Y\to Z,\\[6pt]h:Z\to W,
\end{gather}$$
the composite morphisms 
$$\begin{gather}
h\circ(g\circ f):X\to W,\\[6pt]
(h\circ g)\circ f:X\to W,
\end{gather}$$
must be equal, disambiguating the term
$$h\circ g\circ f$$
and making composition associative and unital.

# Quivers
[[Quiver|See: Quivers]]

# Commutation
Given an arbitrary category $\mathcal{C}$ containing objects
$$X,Y,Z,W,$$
and morphisms between them
$$\begin{gather}
e:X\to Y,\\[6pt]
f:Y\to W,\\[6pt]
g:X\to Z,\\[6pt]
h:Z\to W,
\end{gather}$$
the composite morphisms 
$$f\circ e:X\to W$$
and 
$$h\circ g:X\to W$$
are not necessarily equal.

As an example, in a category $\mathcal{C}$ whose objects include 
$$\begin{gather}
X:=\mathbb{N},\\[6pt]
Y:=\{ 1 \}, \\[6pt] 
Z:=\{ 1,2 \},\\[6pt] 
W:=\{ -1,1 \},
\end{gather}$$
with corresponding morphisms (not including the identities)$$\begin{gathered}
e:\mathbb{N}\to \{ 1 \};\qquad x\mapsto1,\\[6pt]
f:\{ 1 \}\to \{ -1,1 \};\qquad y\mapsto1,\\[6pt]
g:\mathbb{N}\to \{ 1,2 \};\qquad z\mapsto \begin{cases}
1\qquad z \text{ is odd}\\2\qquad z\text{ is even}
\end{cases}\,\,,\\[6pt]
h:\{ 1,2 \}\to \{ -1,1 \};\qquad w\mapsto(-1^w),
\end{gathered}$$
$f\circ e$ takes every natural number $n$ to the integer $1$, while $h\circ g$ first maps every natural number to either $1$ or $2$ depending on parity, and then to $-1$ or $1$ based on the same criteria.

A category in which every composite morphism with the same domain and codomain are equal is said to [[Commutative Diagram|commute]], and the corresponding [[Quiver|quivers]] of such categories possess a single edge to represent parallel paths.

# Object-less Categories
The existence and uniqueness of the identity morphism of every object $X$ in a category defines a one-to-one correspondence between the two

---
publish: true
title: "Quiver"
slug: "quiver"
subject: "Category theory"
status: "Working note"
description: "Directed multigraphs and their relationship to the objects and morphisms of a category."
order: 20
---

### Definition
A quiver $\Gamma$ is a directed [[Graph|graph]], or more specifically [[Multigraph|multigraph]] in which two vertices may possess multiple edges connecting them, including loops originating from and terminating at the same vertex.

Formally, this means that $\Gamma$ is a tuple $(V,E,s,t)$, where $V$ is the set of vertices, $E$ the set of edges, $s$ the map 
$$s:E\to V$$
which maps an edge to its source vertex, and $t$ the map 
$$t:E\to V$$
which maps an edge to its target vertex.
### Motivation
In category theory, a [[Small Category|small category]] is a category in which the collections of objects and morphisms form sets rather than proper classes. For such categories, there is a one to one correspondence between categories $\mathcal{C}$ and quivers $Q(\mathcal{C})$ made by defining
$$\begin{gather}
V:=\operatorname{Ob}(\mathcal{C})\\[6pt]
E:=\operatorname{Mor}(\mathcal{C})\\[6pt]
s:=\operatorname{Dom}\\[6pt]
t:=\operatorname{Cod}.
\end{gather}$$
Such a quiver is naturally reflexive (meaning every vertex has at least one loop) as the identity morphism exists for every object, and every directed path of connected edges defines a composite edge according to the composition rules of categories. In general, parallel paths correspond to distinct composite edges, and therefore distinct composite morphisms, however in the case they don't, we say that the category, and therefore the quiver commutes.

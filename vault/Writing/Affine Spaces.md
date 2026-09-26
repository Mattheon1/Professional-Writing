---
publish: true
title: Affine Spaces
slug: affine-spaces
subject: Affine geometry
status: First Draft
description: Translations, subtraction, and the vector-space structure obtained by choosing an origin.
order: 40
---

Notation: $\forall$: for all, $\in$: within/element of, $\exists$: exists, $\exists!$: there exists a unique element,
$\implies$: implies

##### "Origins" of geometry
Euclid, Galileo, and Einstein all agreed on one very important property of space: there is no preferred point which could be called an origin from which all points in space are linked. This is reflected not only in the importance of congruence rather than equality in Euclidean geometry, but also in the language of our physical theories.

Take for instance two coordinate systems on $\mathbb{R}^n$ $(x,y,z)$  and  $(x'_{t},y'_{t},z'_{t})$ connected by a parameterized coordinate transformation $\phi_{t}(x,y,z)=(x'_{t},y'_{t},z'_{t})$$=(x-v_{x}t,y-v_{y}t,z-v_{z}t)$ (here $\forall i\in \{ x,y,z \}$ $v_{i}$ is just some real number).

Given the differential equations $F=m \ddot{\vec{x}}$ (ignoring boundary conditions for a moment), we can see that any solution $\vec{x}:\mathbb{R}\to \mathbb{R}^3$ defines another solution $\vec{x}'=\phi_{t}(\vec{x}):\mathbb{R}\to \mathbb{R}^3$ for any $t\in \mathbb{R}$

If we interpret the differential equation as being the equation of motion for a particle experiencing some force $F$, then the coordinate transformation $\phi_{t}$ represents the transformation from the first frame at time $t$ into the frame of an observer moving at a constant velocity $\vec{v}$ at time $t$. 

If the first solution is a path given in the $(x,y,z)$ coordinates, then the second solution is the same path given in the $(x'_{t},y'_{t},z'_{t})$ coordinates. If $\vec{x}$ satisfies boundary conditions $\dot{\vec{x}}(0)=\dot{\vec{x}}_{0}$ and $\vec{x}(0)=\vec{x}_{0}$, then 




Affine spaces are exactly that framework. An affine space is a tuple $\mathcal{A}=(A,\vec{A},+,-)$ (often $+$ and $-$ are omitted as they are defined explicitly in terms of $\vec{A}$) where $A$ is a set of elements called "points", $\vec{A}$ is an associated vector space sometimes called the free vector space over $A$, and $+$ and $-$ are binary operations that will be defined below. 

The set $A$ is often identified with the affine space itself as long as the vector space $\vec{A}$ is known and can be thought of as a set of abstract points with no inherent structure separate from its association with $\vec{A}$.

##### Addition
The map $+:A\times\vec{A}\to A$ is a free, transitive (right) group action by the additive group $(\vec{A},+)$ on the set $A$ (what this means will be explained) which represents translation in the affine space. If you don't know what a group action is, this just means that addition is defined between vectors and points in a way that respects how addition is defined between vectors.

![[Drawing 2025-05-12 03.31.54.excalidraw.svg]]

For the group action to be free, the only element $v\in\vec{A}$ satisfying that $\forall x\in A\,\,x+v=x$ is the identity ${0}$, and for the action to be transitive, the group action must have only one orbit $x+\vec{A}$(in simpler terms, $\forall x,y\in A\ \,\exists v\in \vec{A}$ satisfying $x+v=y$, and this $v$ must be unique as the fact $+$ is free requires that $x+v=x+w\implies x+(v-w)=x+0=x\implies v-w=0\implies v=w$). 


#####  Subtraction
The uniqueness condition here is what we use to define the second operation  $-:A\times A\to \vec{A};(y,x)\mapsto y-x$ where $y-x$ is the unique vector satisfying $x+v=y$. This operation allows one to identify pairs of points with vectors in the associated vector space. 

An interesting (and useful) fact about the subtraction operation is that it is notationally compatible with the group addition: The vector from two points $(x,z)$ is $z-x$, and the vector from two points $(z,y)$ is $y-z$, and the composition $(z-x)+(y-z)$ is the vector from $x$ to $y$ or $y-x$. 

The power of the subtraction operation becomes immediately obvious when you recast the addition operation in terms of it:  $+:A\times(A\times A)\to A;\big(x,(y,z)\big)\mapsto x+(y-z)$. For those familiar with group theory, this choice should seem obvious as $A$ is a principle homogeneous space of $(\vec{A},+)$, however for those that aren't, the real advantage here is that the entirety of $\vec{A}$ and it's action on $A$ can be defined in terms of this operation.

This is done by first recognizing that $\forall x\in A\,\forall v\in \vec{A}\,\,\exists!\, y\in A$ satisfying $x+v=y$ which equates $v$ and $y-x$. Fixing a point $x$, we can vary the second point $y$ over all of $A$ and generate the vector space $\vec{A}$. The choice to fix our initial point $x$ is essentially the same as labeling $x$ as the origin of $A$ and transforming it into a vector space. 

![[Drawing 2025-05-12 03.31.54.excalidraw 1.svg]]

The following are some helpful identities and properties along with their derivations that can be found for the subtraction operation:


1. $(z-x)+(y-z)=y-x \implies z-x=(y-x)-(y-z)=(y-x)+(z-y)$
2. $z-x=(z-y)+(y-x)$ and $y-x=(y-z)+(z-x)\implies z-x=(z-y)+(y-z)+(z-x)$$\implies(z-y)+(y-z)=0\implies y-z=-(z-y)$
3. $y+(z-x)=x+(y-x)+(z-x)$
4. $(z-x)=0\implies(x-z)=0=(z-x)\implies z+(x-z)=x=z$
##### Formal Vectorization of $A$
If you have a decent mathematical background and are interested in how the rigorous sausage is made , it's easy to show how fixing an element $x$ is equivalent to choosing an origin by establishing a one to one correspondence between $A$ with some induced structure and the additive group $(\vec{A},+)$ using subtraction. 

First we should make our process of generating vectors more precise by defining an explicit map using currying (fixing one input):  $\phi_{x}:=-_{x}:A\to \vec{A};y\mapsto y-x$. It would be prudent to notice that $\forall y\in A\,\,x+\phi_{x}(y)=y$ as it simplifies many derivations.

As an example of the utility of the identity above, to prove that $\phi_{x}$ plays nicely with vector addition, we choose a point $w:=y+v$. Since there always exists another point $z$ such that $v=(z-x)=\phi_{x}(z)$, we might as well replace $v$ with $\phi_{x}(z)$.

$w=y+\phi_{x}(z)$ can be rewritten using identity (3) and the observation we made earlier to yield $w=x+\phi_{x}(w)=x+\phi_{x}(y)+\phi_{x}(z)$, which using identity (4) give us that $\phi_{x}(w)=\phi_{x}(y)+\phi_{x}(z)$, or $\phi_{x}(y+v)=\phi_{x}(y+\phi_{x}(z))=\phi_{x}(y)+\phi_{x}(z)$.
![[Drawing 2025-05-12 03.31.54.excalidraw 2.svg]]

###### Group Structure
Continuing with establishing the bijection between $A$ and $\vec{A}$,  we should investigate the induced structure on $A$ by $\phi_{x}$.

Converting point addition into a binary operation by currying the third argument of our modified addition gives the map $+_{x}:A\times A\to A;(y,z)\mapsto y+\phi_{x}(z)$ whose output may be denoted by $y+_{x}z$ whenever doing so does not obscure the mechanics of the operation.
Using subtraction identity (3), note that $y+_{x}z=y+\phi_{x}(z)=x+\phi_{x}(y)+\phi_{x}(z)$. 


By defining the map $+_{x}$ in the way that we have, we actually induced a group structure on the set $A$ as the map can be shown to satisfy all 3 of the group axioms:

1. The addition operation as defined above has a unique identity element, $x$: $\forall z\in A\,\,\,x+_{x}z=x+\phi_{x}(z)=z$ and $\forall y\in A\,\,\,y+_{x}x=y+\phi_{x}(x)=y$. 


This element is guaranteed to be unique in the first case by the fact that any other point $y$ that satisfies $y+\phi_{x}(x)=z$ can be rewritten as $x+\phi_{x}(y)$ giving $x+\phi_{x}(y)+\phi_{x}(z)=x+\phi_{x}(z)$ which implies $\phi_{x}(y)=0$ or by (4) $y=x$, and in the second case simply applying (4) directly to $y+\phi_{x}(z)=y$ tells us that $z$ must equal $x$.


2. The associativity of $+_{x}$ follows from the associativity of $+$: $w+_{x}(y+_{x}z)=x+\phi_{x}(w)+\phi_{x}(y+_{x}z)=x+\phi_{x}(w)+\phi_{x}(y)+\phi_{x}(z)=x+\phi_{x}(w+_{x}y)+\phi_{x}(z)=(w+_{x}y)+_{x}z$

3. Every element has an inverse:                   $\forall y\in A\,\,\,(x-\phi_{x}(y))+_{x}\phi_{x}(y)=x-\phi_{x}(y)+\phi_{x}(y)=x$ which lets us label the element $x-\phi_{x}(y)$ as $-y$

This group multiplication does more than just turn $A$ into a group however, it also turns the map $\phi_{x}$ into a group homomorphism (and in fact an isomorphism) which is the last step of establishing the correspondence.

###### Group Isomorphism
The map $\phi_{x}$ has already been shown to be a map between groups, however in order to be a group homomorphism it must satisfy the requirement that $\phi_{x}(y+_{x}z)=\phi_{x}(y)+\phi_{x}(z)$. It turns out we've already done this when we showed the compatibility of vector and point addition: $\phi_{x}(y+_{x}z)=\phi_{x}(y+\phi_{x}(z))=\phi_{x}(y)+\phi_{x}(z)$. Easy right?

In order to show that this homomorphism is an isomorphism, we must establish that it is both a monomorphism and an epimorphism. Once again, we've already proven both: $\forall y\in A\,\,\,\phi_{x}(y)$ is the unique element satisfying $x+v=y$. We already know no other point $z$ could be mapped to this same $v$, as if it could $x+\phi_{x}(z)=z=x+\phi_{x}(y)=y$ or $z=y$.

Similarly $\phi_{x}$ is an epimorphism as fixing the point $x$, $\forall v\in \vec{A}\,\,\,\exists!y\in A$ such that $x+v=y$ which as we know, means that $v=(y-x)=\phi_{x}(y)$.

Thus the choice of origin $x$ allows us to identify $(A,+_{x})$ with the additive group of $(\vec{A},+)$.

![[Drawing 2024-08-10 16.33.35.excalidraw 2.svg]]

###### Vector Operations
The final step in the formal vectorization of $A$ is to take it from a group into a vector space. By showing that $(A,+_{x})\cong(\vec{A},+)$, we've basically already done this. If we require the map $\phi_{x}^{-1}$ to be a linear isomorphism and define scalar multiplication on $A$ in a way that is compatible with this (ex. $\phi_{x}(ay)=a\phi_{x}(y)$ or $a\phi_{x}(y)+b\phi_{x}(y)=(a+b)\phi_{x}(y)=\phi_{x}(a+b)y$ ) and we're done. We don't have to worry about what field we construct the vector space over or any other complications, we have converted $A$ into an isomorphic vector space to $\vec{A}$ by simply "choosing an origin".

The opposite can of course be done too. Taking a vector space ${V}$ we can "forget" about the origin by removing the operations defined on it, and this new affine space has as it's associated vector space $V$ itself. In this way the choice of origin of a vector space is arbitrary, one could merely start from the affine space $(V,V,+,-)$, choose any vector $v$ as the origin using the process performed earlier, and generate an isomorphic vector space with the only difference being which vector is the zero vector. 



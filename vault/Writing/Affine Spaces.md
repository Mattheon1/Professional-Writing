---
publish: true
title: Affine Spaces
slug: affine-spaces
subject: Affine geometry
status: Complete
description: Translations, subtraction, and the vector-space structure obtained by choosing an origin.
order: 40
---

## Author's Note:

_Some rudimentary knowledge of abstract and linear algebra will be necessary to fully understand this article. Where possible, I have tried to explain what certain terms mean, but as this series culminates in topics from projective geometry, differential geometry, and algebraic topology, I have included content which may be beyond some people's level. If you find yourself in that group, try to follow along as much as you can, and focus on what makes sense to you. The difficulty will be largely consistent within each subsection, and anything beyond a first course in linear algebra will be marked with a $\star$. The notation and conventions used throughout the series are collected in [[Notation]]._

---
## The External Displacement Model of an Affine Space

In its simplest form, an affine space $\mathcal{A}:=(A,\vec{A},+)$ consists of a nonempty set of points $A$, an $\mathbb{F}$-vector space $\vec{A}$ called its _model space_ (or space of displacements),[^1] and a free and transitive action of the additive group $(\vec{A},+)$ on $A$ given by
$$
\begin{aligned}
+:A\times\vec{A}&\to A; \\
(p,v)&\mapsto p+v.
\end{aligned}
$$

Informally, the vectors of $\vec{A}$ act by moving the points of $A$: displacing a point by $u+v$ is the same as displacing it first by $u$ and then by $v$, and any point may be carried to any other by exactly one displacement. Explicitly, being a free and transitive group action means in particular that for arbitrary points $p,q\in A$ and vectors $u,v\in\vec{A}$,

$$ p+(u+v)=(p+u)+v,\qquad \exists!w\in\vec{A}:p+w=q. $$

As the displacement from $p$ to $q$ is unique, we may denote it by $q-p$ and define the map
$$
\begin{aligned}
-:A\times A&\to\vec{A}; \\
(p,q)&\mapsto q-p,
\end{aligned}
$$


which takes each pair of points to the displacement vector from the first to the second. From this definition of subtraction we then obtain the identities

$$ p+(q-p)=q,\qquad (p+v)-p=v. $$


#### Example 1: Solution Sets of Linear Equations

Let $L:V\to W$ be a linear map between $\mathbb{F}$-vector spaces, and $b\in W$ some vector for which the solution set $$ A:=L^{-1}(b)=\{x\in V:L(x)=b\} $$
is nonempty. For any $x\in A$ and $v\in\ker L$ we have by linearity$$ L(x+v)=L(x)+L(v)=b, $$
so addition in $V$ restricts to an action $$\begin{aligned} +:A\times\ker L&\to A;  \\
 (x,v)&\mapsto x+v. \end{aligned}$$As $\ker L$ is a vector subspace of $V$, this action is free since addition in $V$ is. Given any two solutions $x,y\in A$ we also have $$ L(y-x)=L(y)-L(x)=0\iff y-x\in\ker L, $$
so the action is transitive, and thus $(A,\ker L,+)$ is an affine space.

For the trivial example, taking $L=0$ and $b=0$ in particular makes every vector a solution, so every vector space $V$ is an affine space over itself, acting on its own points by vector addition.

Less trivially, given the linear map $$\begin{aligned}
L:\mathbb{R}^3&\to \mathbb{R}; \\
(x_{1},x_{2},x_{3})&\mapsto x_{1}+x_{2}+x_{3},
\end{aligned}$$the plane $$ H_1:=\{x\in\mathbb{R}^3:x_1+x_2+x_3=1\} $$is the solution set of $L(x)=x_1+x_2+x_3=b=1$, and is thus an affine space modeled on the plane $u_1+u_2+u_3=0$. 

![[affine-spaces-solution-plane.svg|center|429]]


Finally, letting $I\subseteq\mathbb{R}$ be a nonempty open interval, the derivative

$$\begin{aligned}  
\frac{d}{dt}:C^1(I)&\to C^0(I); \\  
g&\mapsto g'  
\end{aligned}$$

is a linear map whose kernel, by the mean value theorem, consists precisely of the constant functions on $I$. Given a continuous function $f\in C^0(I)$, the solution set of the equation $g'=f$ is then the set of antiderivatives $$\int f(s)\,ds:=\{ g\in C^1(I):g'=f \},$$ which is nonempty by the fundamental theorem of calculus: for any $a\in I$, the function

$$G_a(t):=\int_a^t f(s)\,ds$$

satisfies $G_a'=f$, and is thus a solution. Choosing a different base point $b\in I$ gives a different choice of antiderivative $G_{b}$, whose displacement from $G_{a}$ is given by the constant function

$$G_{b}-G_a=\int_{b}^{a}f(s)\,ds.$$
Thus the set of antiderivatives of $f$ forms an affine space over the constant functions on $I$, with translation corresponding to the identity $$\int_{a}^cf(s)\,ds=\int_{b}^cf(s)\,ds+\int_{a}^{b}f(s)\,ds.$$ 

![[affine-spaces-antiderivatives.svg|center|428]]

#### Chasles' Identity and Some Corollaries

Given an affine space $\mathcal{A}=(A,\vec{A},+)$ and two points $p,r\in A$, we know from the definition of point subtraction that the unique solution to the equation
$$
p+v=r
$$
is the vector
$$
v=r-p.
$$
Letting $q\in A$ be some third intermediate point, we also know that
$$
p+(q-p)=q,\quad q+(r-q)=r.
$$
Hence we may conclude from the compatibility of the action with vector addition that
$$
\begin{aligned}
p+\bigl((q-p)+(r-q)\bigr) &=\bigl(p+(q-p)\bigr)+(r-q) \\
&=q+(r-q) \\
&=r.
\end{aligned}
$$
As $r-p$ is the unique displacement taking $p$ to $r$, we obtain _Chasles’ identity_,
$$
(q-p)+(r-q)=r-p.
$$
Equivalently, taking $p$ as a common base point or $r$ as a common endpoint, we get the following displacement identities:
$$
\begin{aligned}
r-q&=(r-p)-(q-p), \\[6pt]
q-p&=(r-p)-(r-q).
\end{aligned}
$$

![[affine-spaces-chasles.svg|center|360]]

Letting $p=r$ in Chasles' identity then gives
$$
(q-p)+(p-q)=p-p=0,
$$
or
$$
p-q=-(q-p).
$$

We may also use Chasles’ identity to determine how the displacement $q-p$ changes when its endpoints are translated. Writing $u,v\in\vec{A}$ for the respective displacements of $p$ and $q$, we may take the original endpoints as intermediate points in passing from $p+u$ to $q+v$. The resulting displacement is then given by

$$
\begin{aligned}
(q+v)-(p+u) &=\bigl((q+v)-q\bigr)+\bigl(q-(p+u)\bigr) \\
&=\bigl((q+v)-q\bigr)+(q-p)+\bigl(p-(p+u)\bigr) \\
&=(q-p)+(v-u).
\end{aligned}
$$

![[affine-spaces-endpoint-translation.svg|center|378]]
 
In particular, when $v=u$ we have
$$ (q+v)-(p+v)=q-p, $$ 
so translating both endpoints by the same vector leaves their displacement unchanged.

#### Example 2: The Parallelogram Law

Exchanging the starting points of two displacements preserves their sum, as by Chasles' identity

$$\begin{aligned} (q-p)+(r-s) &=(q-s)+\bigl((s-p)+(r-s)\bigr)  \\
 &=(q-s)+(r-p). \end{aligned}$$

Adding the displacements $q-p$ and $r-p$ to the point $p$ in either order therefore gives the same fourth vertex of a parallelogram:

$$\begin{aligned} q+(r-p) &=p+\bigl((q-p)+(r-p)\bigr)  \\
 &=r+(q-p). \end{aligned}$$
  Finally, the exchange and reversal identities give

$$ (q-p)-(s-r)=(r-p)-(s-q), $$

and hence

$$ q-p=s-r\iff r-p=s-q. $$

Thus equality of the displacements along one pair of opposite sides guarantees equality along the other pair.

![[affine-spaces-parallelogram.svg|center|319]]

---
## Identification of Translations and Displacements

We saw [[#Chasles' Identity and Some Corollaries|above]] that translating both endpoints of a displacement by the same vector leaves the displacement unchanged. Doing this to every point at once, by fixing a displacement $v\in\vec{A}$
in the addition operation and allowing the starting point $p\in A$ to vary, gives the translation  

$$  
\begin{aligned}  
\tau_v:A&\to A; \\  
p&\mapsto p+v,  
\end{aligned}  
$$

which moves the whole of $A$ by $v$.

![[affine-spaces-translation.svg|center|459]]

Defining such a translation for each vector in $\vec{A}$ and collecting them gives the set
$$
\mathcal{T}(\mathcal{A}):=\{\tau_v\in A^A:v\in\vec{A}\}.
$$
Under composition these translations form a group isomorphic to $(\vec{A},+)$, with composing two translations corresponding to adding their displacements: given $u,v\in\vec{A}$, translating a point $p\in A$ first by $v$ and then by $u$ gives
$$
\begin{aligned}
(\tau_u\circ\tau_v)(p)
&=(p+v)+u \\
&=p+(u+v) \\
&=\tau_{u+v}(p).
\end{aligned}
$$
As this holds for every point $p\in A$, we obtain
$$
\tau_u\circ\tau_v=\tau_{u+v}.
$$
In particular, zero displacement gives the identity translation, and reversing a displacement gives the inverse translation:
$$
\tau_0=\operatorname{id}_A,\qquad \tau_v\circ\tau_{-v}=\tau_{-v}\circ\tau_v=\tau_0.
$$

Thus every translation is a bijection, and $\mathcal{T}(\mathcal{A})$ is a subgroup of the group $\operatorname{Sym}(A)$ of all bijections from $A$ to itself under composition. As vector addition is commutative, this subgroup is Abelian, with $\tau_u\circ\tau_v=\tau_v\circ\tau_u$. Its action on $A$ by evaluation is also transitive, as any two points $p,q\in A$ satisfy
$$
\tau_{q-p}(p)=p+(q-p)=q.
$$

Since the displacement taking a point to its translate is unique, distinct displacements determine distinct translations; for if $\tau_u=\tau_v$, then for any $p\in A$,
$$
u=(p+u)-p=(p+v)-p=v.
$$
Thus the map
$$
\begin{aligned}
\tau:\vec{A}&\to\mathcal{T}(\mathcal{A}); \\
v&\mapsto\tau_v
\end{aligned}
$$
is a bijection, and as it takes addition of displacements to composition of translations, a group isomorphism.

Transferring the scalar multiplication on $\vec{A}$ through $\tau$ by defining
$$
\lambda\tau_v:=\tau_{\lambda v},
$$
the scalar multiplication axioms on $\mathcal{T}(\mathcal{A})$ follow from the corresponding axioms on $\vec{A}$:
$$
\begin{aligned}
\lambda(\mu\tau_v)&=\lambda\tau_{\mu v}=\tau_{(\lambda\mu)v}=(\lambda\mu)\tau_v, \\
1\tau_v&=\tau_{1v}=\tau_v, \\
\lambda(\tau_u\circ\tau_v)&=\lambda\tau_{u+v}=\tau_{\lambda u+\lambda v}=(\lambda\tau_u)\circ(\lambda\tau_v), \\
(\lambda+\mu)\tau_v&=\tau_{\lambda v+\mu v}=(\lambda\tau_v)\circ(\mu\tau_v).
\end{aligned}
$$
Hence $\tau$ is a linear isomorphism between the space of displacements and the space of translations. 

---
## The Intrinsic Model of an Affine Space $\star$

The definition above describes affine spaces with respect to a predetermined action by an external space of displacements, with the geometry of the resultant affine space fully specified by this choice. We may instead describe this geometry intrinsically, by specifying which permutations of the point set constitute translations, and how scalars act on them.
#### A Torsor of Translations

To begin, let $A$ be any nonempty set and $\mathcal{T}\leq\operatorname{Sym}(A)$ be an Abelian subgroup whose right action by evaluation[^2]
$$
\begin{aligned}
\operatorname{ev}:A\times\mathcal{T}&\to A; \\
(p,t)&\mapsto t(p)
\end{aligned}
$$
is transitive. Although we have only required this action to be transitive, we can show that it must also be free: if a translation $t\in\mathcal{T}$ fixes any point $p\in A$, then for every translation $s\in\mathcal{T}$ we have by commutativity
$$
t(s(p))=s(t(p))=s(p).
$$
Since the action is transitive, $s(p)$ ranges over all of $A$. Hence $t$ fixes every point, and as an element of $\operatorname{Sym}(A)$ it must be $\operatorname{id}_A$, so the action is free.

A set equipped with such a free and transitive action is called a _torsor_[^3] under the acting group. Writing the group operations and action additively as
$$
t+s:=t\circ s,\qquad 0:=\operatorname{id}_A,\qquad -t:=t^{-1},\qquad p+t:=t(p),
$$
for arbitrary points $p,q\in A$ and translations $t,s\in\mathcal{T}$ we have
$$
p+(t+s)=(p+t)+s,\qquad \exists!u\in\mathcal{T}:p+u=q,
$$
These match the additive conditions placed on affine spaces in [[#The External Displacement Model of an Affine Space|the opening]], with no reference made to scalars.

As the translation taking any point $p$ to any point $q$ is unique by the freedom of the action, we may once again denote it by $q-p$ and define the map
$$
\begin{aligned}
-:A\times A&\to\mathcal{T}; \\
(p,q)&\mapsto q-p,
\end{aligned}
$$
which takes each pair of points to the translation taking the first to the second. Just like with addition, this map satisfies the subtractive conditions
$$
p+(q-p)=q,\qquad (p+t)-p=t.
$$

#### Compatible Scalar Multiplication and Induced Model Space

To construct an affine space over a field $\mathbb{F}$ from a torsor, all we require is a compatible scalar multiplication map
$$
\begin{aligned}
\cdot:\mathbb{F}\times\mathcal{T}&\to\mathcal{T}; \\
(\lambda,t)&\mapsto\lambda t
\end{aligned}
$$
satisfying, for every $\lambda,\mu\in\mathbb{F}$ and $t,s\in\mathcal{T}$,
$$
\begin{aligned}
\lambda(\mu t)&=(\lambda\mu)t, & 1t&=t, \\
\lambda(t+s)&=\lambda t+\lambda s, & (\lambda+\mu)t&=\lambda t+\mu t.
\end{aligned}
$$
As these properties make $\mathcal{T}$ an $\mathbb{F}$-vector space, defining $(\vec{A},+):=(\mathcal{T},\operatorname{ev})$[^4] gives a free and transitive group action by a vector space on $A$. We thus obtain our original description of an affine space as a triple $\mathcal{A}:=(A,\vec{A},+)$ from the intrinsic data $(A,\mathcal{T},\cdot)$.

While in most applications the appropriate scalar multiplication is already supplied by the ambient algebraic structure on the point set, in general any such operation can be specified equivalently by a ring homomorphism
$$
\rho:\mathbb{F}\to\operatorname{End}(\mathcal{T}),
$$
where $\operatorname{End}(\mathcal{T})$ is the ring of endomorphisms of the underlying Abelian group. Here addition is defined pointwise[^5] and multiplication by composition, so that for arbitrary $\alpha,\beta\in\operatorname{End}(\mathcal{T})$,
$$
(\alpha+\beta)(t):=\alpha(t)\circ\beta(t),\qquad (\alpha\beta)(t):=\alpha(\beta(t)).
$$
Each scalar $\lambda$ then determines an endomorphism $\rho(\lambda)$,[^6] with scalar multiplication defined by
$$
\lambda t:=\rho(\lambda)(t).
$$

The two descriptions carry the same data. Starting from an affine space $\mathcal{A}=(A,\vec{A},+)$, the linear isomorphism $\tau:\vec{A}\to\mathcal{T}(\mathcal{A})$ satisfies $\tau_v(p)=p+v$, so displacing a point by $v$ and evaluating the translation $\tau_v$ there are the same operation. Starting instead from intrinsic data $(A,\mathcal{T},\cdot)$, each displacement $t$ of the induced affine space determines a translation satisfying $\tau_t(p)=p+t=t(p)$, so translating by $t$ is applying $t$, with $\tau$ being the identity on $\mathcal{T}$.

#### Example 3: Integer Scalars and the Circle

Every Abelian group admits a canonical scalar multiplication by integers given by repeated addition, which for a torsor of translations is repeated composition:
$$
nt:=\underbrace{t\circ\cdots\circ t}_{n},\qquad 0t:=\operatorname{id}_A,\qquad (-n)t:=-(nt),\qquad n>0.
$$
As $\mathcal{T}$ is Abelian, this multiplication satisfies the four axioms above with $\mathbb{Z}$ in place of $\mathbb{F}$, so every torsor is an affine space over $\mathbb{Z}$. This is also the only integer multiplication that may be defined, as a ring homomorphism $\mathbb{Z}\to\operatorname{End}(\mathcal{T})$ must send $1$ to $\operatorname{id}_{\mathcal{T}}$. Since $(\mathbb{Z},+)$ is generated by $1$, its value on every other integer is fixed by additivity.

Over a field, such a scalar multiplication need not exist. Letting $S^1\subseteq\mathbb{C}$ be the unit circle, its group of rotations $U(1)$ consists of the maps
$$
\begin{aligned}
r_\theta:S^1&\to S^1; \\
z&\mapsto e^{i\theta}z,
\end{aligned}
$$
which commute and carry any point to any other, thus making $S^1$ a torsor under the Abelian group $U(1)$. The half turn $r_\pi$ satisfies
$$
r_\pi+r_\pi=r_{2\pi}=0,\qquad r_\pi\neq0,
$$
so any compatible scalar multiplication by a field of characteristic $0$ would give
$$
r_\pi=\tfrac{1}{2}(2r_\pi)=\tfrac{1}{2}(r_\pi+r_\pi)=\tfrac{1}{2}\,0=0,
$$
which is a contradiction. Over a field of characteristic $\ell>0,$ we would instead have
$\ell t=(\ell\cdot1)t=0$ for every translation $t$. Applied to the rotation by a single radian $r_1$, this gives  

$$r_\ell=\ell r_1=0,$$

so the integer $\ell$ would have to be a nonzero integer multiple of $2\pi$. As $2\pi$ is irrational, this is not possible, and thus the circle, together with its rotations, is a torsor which is not an affine space over any field.

![[affine-spaces-circle-rotations.svg|center|232]]


#### Example 4: Different Translations on the Same Point Set

Letting $\mathcal{T}:=\{\tau_a:a\in\mathbb{R}\}$ be the set of translations $\tau_a(x)=x+a$ given by having $\mathbb{R}$ act on itself by addition, we may also consider the maps
$$
\begin{aligned}
t_a:\mathbb{R}&\to\mathbb{R}; \\
x&\mapsto\sqrt[3]{x^3+a}.
\end{aligned}
$$
Composing two of these gives
$$
(t_a\circ t_b)(x)=\sqrt[3]{\left(\sqrt[3]{x^3+b}\right)^3+a}=\sqrt[3]{x^3+a+b}=t_{a+b}(x),
$$
so $\mathcal{T}':=\{t_a:a\in\mathbb{R}\}$ is an Abelian subgroup of $\operatorname{Sym}(\mathbb{R})$. As $t_{y^3-x^3}(x)=y$ its action is transitive, and defining $\lambda t_a:=t_{\lambda a}$ gives a compatible scalar multiplication. In both $\mathcal{T}$ and $\mathcal{T}'$ the translation taking $0$ to $1$ is indexed by $a=1$, yet halving it gives
$$
0+\tfrac{1}{2}\tau_1=\tfrac{1}{2},\qquad 0+\tfrac{1}{2}t_1=\sqrt[3]{1/2},
$$
so the two describe different affine structures on the same point set.

Indexing each set of translations by $\mathbb{R}$ through the linear isomorphisms $a\mapsto\tau_a$ and $a\mapsto t_a$, the evaluation maps of the two structures become
$$
\begin{aligned}
\operatorname{ev}:\mathbb{R}\times\mathbb{R}&\to\mathbb{R}; & \operatorname{ev}':\mathbb{R}\times\mathbb{R}&\to\mathbb{R}; \\
(x,a)&\mapsto x+a, & (x,a)&\mapsto\sqrt[3]{x^3+a},
\end{aligned}
$$
and the cube map $h(x)=x^3$ satisfies
$$
h\bigl(\operatorname{ev}'(x,a)\bigr)=x^3+a=\operatorname{ev}\bigl(h(x),a\bigr).
$$
Thus $h$ carries the action of every displacement $a$ in the second structure to its action in the first while leaving $a$ itself unchanged. The two structures therefore differ only by relabeling points through $h$, which carries the halfway point $\sqrt[3]{1/2}$ between $0$ and $1$ in the second structure to the halfway point $\tfrac{1}{2}$ in the first.

![[affine-spaces-cube-relabeling.svg|center|496]]

#### Example 5: Different Scalars on the Same Torsor

Letting $\mathcal{T}:=\{\tau_v:v\in\mathbb{C}\}$ be the set of translations $\tau_v(z)=z+v$ defined by letting $\mathbb{C}$ act on itself through addition, we may define the map $\rho:\mathbb{C}\to\operatorname{End}(\mathcal{T})$ to be the ring homomorphism corresponding to the scalar multiplication $\lambda\tau_v:=\tau_{\lambda v}.$  Composing $\rho$ with the field automorphism 

$$  
\begin{aligned}  
\sigma:\mathbb{C}&\to\mathbb{C}; \\  
z&\mapsto\bar{z}  
\end{aligned}  
$$

gives a second ring homomorphism $\bar{\rho}:=\rho\circ\sigma$, which acts by
$$
\bar{\rho}(\lambda)(\tau_v)=\tau_{\bar{\lambda}v}.
$$

As $\sigma$ fixes every real number, $\rho|_{\mathbb{R}}=\bar{\rho}|_{\mathbb{R}}$, and so the two give $\mathcal{T}$ the same structure as a real vector space. Writing $at:=\rho(a)(t)=\bar{\rho}(a)(t)$ for this shared real scalar multiplication, for arbitrary 
$a,b\in\mathbb{R}$ and $t\in\mathcal{T}$ we have by the distributive and associative scalar axioms

$$\rho(a+bi)(t)=at+b\,\rho(i)(t),\qquad \bar{\rho}(a+bi)(t)=at+b\,\bar{\rho}(i)(t),$$

so the two scalar multiplications differ only in the action of $i$. Defining $J:=\rho(i)$, we have  

$$\bar{\rho}(i)=\rho(-i)=-J,\qquad J^2=\rho(i^2)=\rho(-1)=-\operatorname{id}_{\mathcal{T}},$$

where $J$ is real-linear as $i$ commutes with every real number. A real-linear map squaring to $-\operatorname{id}$ is called a _complex structure_, so $J$ and $-J$ are both complex structures on the real vector space $\mathcal{T}$. Geometrically, $J(\tau_v)=\tau_{iv}$ rotates each translation a quarter turn counterclockwise, while $-J$ rotates each a quarter turn clockwise, and the two complex affine structures on $\mathbb{C}$ differ only in which quarter turn is taken to be multiplication by $i$.

![[affine-spaces-quarter-turns.svg|center|310]]


---
## Choosing an Origin

An affine space has no naturally distinguished point which could be called the origin: translating the entire space by a displacement leaves every displacement between its points unchanged, so the translated space is indistinguishable from the original. Fixing a point $o$ in the first argument of subtraction breaks this symmetry, as the displacement $p-o$ changes when $p$ alone is translated, and differs from point to point. Measuring every point from a chosen origin in this way turns $A$ itself into a vector space, with operations dependent on the point chosen.


#### The Canonical Model of an Affine Space

Let $\mathcal{A}=(A,\vec{A},+)$ be an arbitrary affine space. Given a fixed point $o\in A$ and arbitrary vector 
$v\in\vec{A}$, the equation $p-o=v$ has the unique solution $p=o+v$. Thus fixing $o$ and identifying every point $p\in A$ with the vector $p-o$ gives the bijection
$$
\begin{aligned}
\phi_o:A&\to\vec{A}; \\
p&\mapsto p-o,
\end{aligned}
$$
with inverse
$$
\begin{aligned}
\phi_o^{-1}:\vec{A}&\to A; \\
v&\mapsto o+v.
\end{aligned}
$$
Under $\phi_o$, the addition of a displacement vector becomes vector addition, and subtraction of points becomes vector subtraction, as by Chasles' identity and its common base point form
$$
\phi_o(p+v)=\bigl((p+v)-p\bigr)+(p-o)=\phi_o(p)+v,\qquad \phi_o(q)-\phi_o(p)=(q-o)-(p-o)=q-p.
$$
On the right, a vector space acts on itself by its own addition, which by [[#Example 1 Solution Sets of Linear Equations|Example 1]] gives any vector space $V$ an affine space $\mathcal{A}_V:=(V,V,+)$, its _canonical affine space_. Choosing a base point $o\in A$ thus identifies $\mathcal{A}$ with $\mathcal{A}_{\vec{A}}$, which we call the _canonical model_ of $\mathcal{A}$.

#### Induced Vector Space Structures

We may also apply this identification in reverse, pulling back the operations on $\vec{A}$ to define a vector space structure on $A$. Requiring $\phi_o$ to be linear leaves only one choice for each operation, given by the maps
$$
\begin{aligned}
+_o:A\times A&\to A; \\
(p,q)&\mapsto\phi_o^{-1}\bigl(\phi_o(p)+\phi_o(q)\bigr), \\[6pt]
\cdot_o:\mathbb{F}\times A&\to A; \\
(\lambda,p)&\mapsto\phi_o^{-1}\bigl(\lambda\phi_o(p)\bigr).
\end{aligned}
$$
As $\phi_o$ is a bijection, each of the vector space axioms follows from the corresponding axiom on $\vec{A}$, so $\vec{A}_o:=(A,+_o,\cdot_o)$ is a vector space with zero vector $o=\phi_o^{-1}(0)$, and $\phi_o$ is a linear isomorphism.

To see that no other choice is possible, let $\oplus$ be any addition on $A$ for which $\phi_o$ is linear. Then $\phi_o(p\oplus q)=\phi_o(p)+\phi_o(q)$, and applying $\phi_o^{-1}$ to both sides gives
$$
p\oplus q=\phi_o^{-1}\bigl(\phi_o(p)+\phi_o(q)\bigr)=p+_o q.
$$
The same argument applies to scalar multiplication.

Geometrically, the addition operation on $\vec{A}_o$ corresponds to [[#Example 2 The Parallelogram Law|completing the parallelogram]] with fixed vertex $o$ and variable vertices $p,q$, which can be seen from the equation
$$
p+_o q=o+(p-o)+(q-o)=p+(q-o)=q+(p-o)=q+_o p.
$$

Scalar multiplication on the other hand corresponds to translating $p$ along the (possibly degenerate) line connecting $o$ and $p$, as
$$
\lambda\cdot_o p=o+\lambda(p-o)=p+(1-\lambda)(o-p),
$$
where the second equality follows from [[#Chasles' Identity and Some Corollaries|translating the endpoints]] of the displacement $o-p$.[^7]

![[affine-spaces-induced-operations.svg|center|678]]


#### Comparing Origins

Choosing two distinct origins $o,o'\in A$ gives the linear isomorphisms
$$
\begin{aligned}
\phi_o:\vec{A}_o&\to\vec{A}, \\[6pt]
\phi_{o'}:\vec{A}_{o'}&\to\vec{A},
\end{aligned}
$$
which label each point $p\in A$ by its position vectors $p-o$ and $p-o'$ respectively. Both vectors lie in $\vec{A}$, which is at once the point set of the canonical model $\mathcal{A}_{\vec{A}}$ and the space of displacements in $\mathcal{A}$.

Reading position vectors as points, $\phi_o$ and $\phi_{o'}$ identify the canonical affine spaces $\mathcal{A}_{\vec{A}_o}$ and $\mathcal{A}_{\vec{A}_{o'}}$ with $\mathcal{A}_{\vec{A}}$. As both spaces share the point set $A$, each point $p\in A$ corresponds to the two points $p-o$ and $p-o'$ of the canonical model, which are related by the transition map
$$
\begin{aligned}
\phi_{o'}\circ\phi_o^{-1}:\vec{A}&\to\vec{A}; \\
v&\mapsto(o+v)-o'=v+(o-o'),
\end{aligned}
$$
where the second equality follows from [[#Chasles' Identity and Some Corollaries|Chasles' identity]]. This map translates the canonical model by the nonzero vector $o-o'$, and so moves the zero vector and is not linear. As
$$
\operatorname{id}_A=\phi_{o'}^{-1}\circ\bigl(\phi_{o'}\circ\phi_o^{-1}\bigr)\circ\phi_o
$$
with $\phi_o$ and $\phi_{o'}$ linear isomorphisms, $\operatorname{id}_A:\vec{A}_o\to\vec{A}_{o'}$ is linear exactly when the transition map is, so it is not linear either.[^8]

Reading position vectors instead as displacements, $\phi_o$ and $\phi_{o'}$ identify both $\vec{A}_o$ and $\vec{A}_{o'}$ with the space of displacements $\vec{A}$, and comparing the two through it takes each point of $\vec{A}_o$ to the point of $\vec{A}_{o'}$ with the same label. This comparison is given by the composite map
$$
\begin{aligned}
\phi_{o'}^{-1}\circ\phi_o:\vec{A}_o&\to\vec{A}_{o'}; \\
p&\mapsto o'+(p-o)=p+(o'-o),
\end{aligned}
$$
where the second equality follows from [[#Example 2 The Parallelogram Law|the parallelogram law]]. This is the translation $\tau_{o'-o}$, and as a composite of the linear isomorphisms $\phi_o$ and $\phi_{o'}^{-1}$, it is a linear isomorphism, carrying sums in $\vec{A}_o$ to sums in $\vec{A}_{o'}$ and taking one origin to the other:
$$
\tau_{o'-o}(p+_o q)=\tau_{o'-o}(p)+_{o'}\tau_{o'-o}(q),\qquad \tau_{o'-o}(o)=o'.
$$

In both readings, the change of origin acts by a translation. Reading position vectors as points, the translation acts on the position vectors themselves, and so moves them. Reading them as displacements, it acts on their endpoints $o$ and $p$, which by [[#Chasles' Identity and Some Corollaries|translating both endpoints]]
leaves them unchanged.

![[affine-spaces-comparing-origins.svg|center|648]]


## Exercises

_Problems marked $\star$ use the starred sections of this article or material beyond a first course in linear algebra. Problems marked $\star\star$ use ideas from outside the series and are included for fun. Throughout, $\mathcal{A}=(A,\vec{A},+)$ is an affine space over a field $\mathbb{F}$._

## Warm-Up: Identities

#### Problem 1: Consequences of the Axioms

Using only the conditions
$$
p+(u+v)=(p+u)+v,\qquad \exists!w\in\vec{A}:p+w=q,
$$
together with the definition of $q-p$ as the unique displacement taking $p$ to $q$, prove the following for all $p,q,r,s\in A$ and $u,v\in\vec{A}$.

1. $p+0=p$.
2. $p-p=0$, and $q-p=0$ if and only if $q=p$.
3. If $p+u=p+v$ then $u=v$, and if $p+v=q+v$ then $p=q$.
4. $(p+v)-q=(p-q)+v$ and $p-(q+v)=(p-q)-v$, without using Chasles' identity.
5. The identity $(q-p)-(s-r)=(r-p)-(s-q)$ used in Example 2.

> [!hint]- Hint
> For 1, let $w$ be the unique displacement with $p+w=p$ and compute $p+(w+w)$. For 4, check that $q+\bigl((p-q)+v\bigr)=p+v$ and appeal to uniqueness. For 5, rewrite every displacement with $p$ as its base point.

#### Problem 2: Closed Polygons and Midpoints

A _midpoint_ of two points $p,q\in A$ is a point $m\in A$ with $m-p=q-m$.

1. Show that any points $p_0,\dots,p_n\in A$ satisfy $\sum_{i=1}^{n}(p_i-p_{i-1})=p_n-p_0$, and that the displacements around a closed polygon, where $p_n=p_0$, sum to $0$.
2. Suppose $\operatorname{char}\mathbb{F}\neq2$. Show that any two points $p,q\in A$ have a unique midpoint $m$, and that $m=p+\tfrac{1}{2}(q-p)=q+\tfrac{1}{2}(p-q)$.
3. Suppose $\operatorname{char}\mathbb{F}=2$. Show that $p$ and $q$ have a midpoint only when $p=q$, and that every point of $A$ is then a midpoint of $p$ and itself.
4. Suppose again $\operatorname{char}\mathbb{F}\neq2$. Show that the midpoint of $p$ and $q$ is $\tfrac{1}{2}\cdot_o p+_o\tfrac{1}{2}\cdot_o q$ for every origin $o\in A$.

> [!hint]- Hint
> For 2, write $m=p+w$ and solve for $w$. For 4, the right-hand side is $o+\tfrac{1}{2}(p-o)+\tfrac{1}{2}(q-o)$; subtract $p$ from it using Chasles' identity.

## Heaps $\star$

#### Problem 3: Affine Spaces as Heaps

Informally, a heap is a set with an operation behaving like $a-b+c$, but with no zero element. Explicitly, a _heap_ is a set $H$ together with a map
$$
\begin{aligned}
\langle\cdot,\cdot,\cdot\rangle:H\times H\times H&\to H; \\
(a,b,c)&\mapsto\langle a,b,c\rangle
\end{aligned}
$$
satisfying, for all $a,b,c,d,e\in H$,
$$
\begin{aligned}
\bigl\langle\langle a,b,c\rangle,d,e\bigr\rangle&=\bigl\langle a,\langle d,c,b\rangle,e\bigr\rangle=\bigl\langle a,b,\langle c,d,e\rangle\bigr\rangle, \\[6pt]
\langle a,a,b\rangle&=b=\langle b,a,a\rangle.
\end{aligned}
$$
A heap is _Abelian_ if additionally $\langle a,b,c\rangle=\langle c,b,a\rangle$ for all $a,b,c\in H$.

1. Show that $\langle p,q,r\rangle:=p+(r-q)$ makes the point set $A$ an Abelian heap.

Conversely, let $H$ be a nonempty Abelian heap, and for $p,q\in H$ define
$$
\begin{aligned}
t_{p,q}:H&\to H; \\
x&\mapsto\langle x,p,q\rangle.
\end{aligned}
$$

2. Show that $t_{p,q}(p)=q$, that $t_{p,p}=\operatorname{id}_H$, and that $t_{q,r}\circ t_{p,q}=t_{p,r}$.
3. Show that $t_{a,b}\circ t_{c,d}=t_{c,\langle d,a,b\rangle}$, and deduce that $\mathcal{T}_H:=\{t_{p,q}:p,q\in H\}$ is an Abelian subgroup of $\operatorname{Sym}(H)$ under which $H$ is a torsor.
4. Show that the two constructions undo each other: the maps $t_{p,q}$ built from the heap of part 1 are the translations $\tau_{q-p}$, and the operation $p+(r-q)$ of $H$ as a torsor under $\mathcal{T}_H$ is the original operation $\langle p,q,r\rangle$.
5. Show that an affine space over $\mathbb{F}$ may be described intrinsically by a nonempty Abelian heap $H$ together with a compatible scalar multiplication on $\mathcal{T}_H$.
6. The empty set is a heap. Show that $\mathcal{T}_\varnothing$ is not a group.

> [!hint]- Hint
> For 1, part 4 of Problem 1 gives $(c+v)-b=(c-b)+v$, which verifies the first line of axioms, and the parallelogram law gives commutativity. For the commutativity of $\mathcal{T}_H$ in 3, fix $e\in H$ and show that $x+_e y:=\langle x,e,y\rangle$ makes $H$ an Abelian group in which
>  $\langle x,y,z\rangle=x-_e y+_e z$. The point $e$ plays the same role as the origin of an induced vector space $\vec{A}_o$.

## Solution Sets

#### Problem 4: Antiderivatives and Choosing an Origin

Let $I\subseteq\mathbb{R}$ be a nonempty open interval and $f\in C^0(I)$. By Example 1, the set $\int f(s)\,ds$ of antiderivatives of $f$ is the point set of an affine space whose model space consists of the constant functions on $I$, which we identify with $\mathbb{R}$ by identifying each constant function with its value. For $a\in I$, write $G_a(t):=\int_a^t f(s)\,ds$ for the antiderivative vanishing at $a$, and define
$$
\begin{aligned}
\operatorname{ev}_a:\int f(s)\,ds&\to\mathbb{R}; & \phi_{G_a}:\int f(s)\,ds&\to\mathbb{R}; \\
g&\mapsto g(a), & g&\mapsto g-G_a,
\end{aligned}
$$
where $\phi_{G_a}$ is the identification given by choosing $G_a$ as the origin.

1. Show that $\operatorname{ev}_a$ is a bijection with $\operatorname{ev}_a(g+c)=\operatorname{ev}_a(g)+c$ for every $c\in\mathbb{R}$. Deduce from this that for every $y_0\in\mathbb{R}$, there is exactly one antiderivative $g$ of $f$ with $g(a)=y_0$.
2. Show that $\phi_{G_a}=\operatorname{ev}_a$.
3. Show that for $a,b\in I$, the transition map $\phi_{G_b}\circ\phi_{G_a}^{-1}$ sends each $y_0\in\mathbb{R}$ to $g(b)$, where $g$ is the antiderivative of $f$ with $g(a)=y_0$, and express it as a formula in $y_0$.

> [!hint]- Hint
> For 2, $g-G_a$ is constant, so it equals its value at $a$. For 3, use part 2 for the first claim, and the identity at the end of Example 1 for the formula.

#### Problem 5: Antiderivatives on Disconnected Intervals

Let $U:=(-\infty,0)\cup(0,\infty)$, and let $K$ be the kernel of the linear map $$\frac{d}{dt}:C^1(U)\to C^0(U).$$

1. Show that $K$ consists of the functions that are constant on each of $(-\infty,0)$ and $(0,\infty)$, and that it is spanned by the function $k_-$, equal to $1$ on $(-\infty,0)$ and $0$ on $(0,\infty)$, together with the function $k_+:=1-k_-$.
2. Show that every $f\in C^0(U)$ has an antiderivative on $U$.

By Example 1 and part 2, for each $f\in C^0(U)$ the triple $\bigl(\int f(s)\,ds,K,+\bigr)$ is an affine space.

3. Find all antiderivatives of $f(t)=1/t$ on $U$.
4. Show that the functions $\ln\lvert t\rvert+C$ with $C\in\mathbb{R}$ are exactly the displacements of $\ln\lvert t\rvert$ by constant functions on $U$, and that $\int f(s)\,ds\neq \{ \ln |t|+C\in C^{1}(U):C\in \mathbb{R} \}$.

> [!hint]- Hint
> For 1, apply the mean value theorem on each interval separately. For 2, apply the fundamental theorem of calculus on each interval separately.

#### Problem 6: Solution Sets of a Linear Map

Let $L:V\to W$ be a linear map between $\mathbb{F}$-vector spaces.

1. Show that $L^{-1}(b)$ is nonempty if and only if $b\in\operatorname{im}L$.
2. Show that for each $v\in V$, the translation $x\mapsto x+v$ of $V$ restricts to a bijection from $L^{-1}(b)$ to $L^{-1}\bigl(b+L(v)\bigr)$.
3. Show that the nonempty solution sets $L^{-1}(b)$ are exactly the sets $x+\ker L$, and that each $x\in V$ lies in exactly one of them.

Now let $b:=(3,9)\in\mathbb{R}^2$, and let
$$
\begin{aligned}
L:\mathbb{R}^3&\to\mathbb{R}^2; \\
(x_1,x_2,x_3)&\mapsto(x_1+2x_2-x_3,\ 2x_1+4x_2+x_3).
\end{aligned}
$$

4. Find a point of $L^{-1}(b)$ and a basis of $\ker L$, and check that the displacement between the solutions $(4,0,1)$ and $(0,2,1)$ lies in $\ker L$.

#### Problem 7: Monic Polynomials and a Differential Equation

For $n\in\mathbb{N}$, write $\mathbb{F}[x]_{\leq n}$ for the vector space of polynomials over $\mathbb{F}$ of degree at most $n$.

1. Find a linear map $L$ on $\mathbb{F}[x]_{\leq n}$ and a scalar $b$ for which $L^{-1}(b)$ is the set of monic polynomials of degree $n$, and show that $\ker L=\mathbb{F}[x]_{\leq n-1}$.

Now let
$$
\begin{aligned}
L:C^2(\mathbb{R})&\to C^0(\mathbb{R}); \\
y&\mapsto y''+y,
\end{aligned}
$$
and assume the standard fact that $\ker L=\operatorname{span}\{\cos,\sin\}$. Let $b\in C^0(\mathbb{R})$ be the function $b(t)=t$, and define
$$
\begin{aligned}
E:L^{-1}(b)&\to\mathbb{R}^2; \\
y&\mapsto\bigl(y(0),y'(0)\bigr).
\end{aligned}
$$

2. Find $L^{-1}(b)$.
3. Show that $E$ is a bijection, and that displacing a solution $y$ by $u\in\ker L$ adds $\bigl(u(0),u'(0)\bigr)$ to $E(y)$.
4. Find the solution $y$ with $y(0)=y'(0)=0$.

> [!hint]- Hint
> For 1, take $L$ to be the coefficient of $x^n$. For 2, look for a solution that is a polynomial.

## Further Problems

#### Problem 8: Relabeling Points $\star$

Let $\mathcal{B}=(B,\vec{B},+)$ be an affine space, $A$ a set, and $h:A\to B$ a bijection, and define
$$
\begin{aligned}
+_h:A\times\vec{B}&\to A; \\
(p,v)&\mapsto h^{-1}\bigl(h(p)+v\bigr).
\end{aligned}
$$

1. Show that $(A,\vec{B},+_h)$ is an affine space.
2. Show that the affine structure on $\mathbb{R}$ given by the maps $t_a$ of Example 4 arises as the case 
	$A=B=\mathbb{R}$, $h(x)=x^3$, with $\mathcal{B}$ the canonical affine space of $\mathbb{R}$.

As $\mathbb{R}^2$ and $\mathbb{R}$ have the same cardinality, there is a bijection $\mathbb{R}^2\to\mathbb{R}$.

3. Show that the point set $\mathbb{R}^2$ admits an affine structure with model space $\mathbb{R}$, and that the point set $\mathbb{R}$ admits one with model space $\mathbb{R}^2$.
4. Show that no bijection $\mathbb{R}^2\to\mathbb{R}$ is continuous.

> [!hint]- Hint
> For 4, restrict the bijection to the unit circle. It attains its maximum and minimum there at two distinct points, and by the intermediate value theorem each of the two arcs between these points is mapped onto the whole interval between the two values.

#### Problem 9: Commutativity and Free Actions $\star$

1. Show that $\operatorname{Sym}(\{1,2,3\})$ acts transitively but not freely on $\{1,2,3\}$ by evaluation, and find a subgroup of $\operatorname{Sym}(\{1,2,3\})$ under which $\{1,2,3\}$ is a torsor.
2. Let $A$ be a nonempty set and $\mathcal{T}\leq\operatorname{Sym}(A)$ an Abelian subgroup acting transitively. Show that every $f\in\operatorname{Sym}(A)$ commuting with every $t\in\mathcal{T}$ lies in $\mathcal{T}$, and deduce that no Abelian subgroup of $\operatorname{Sym}(A)$ strictly contains $\mathcal{T}$.
3. Deduce that a bijection $f$ of the points of an affine space $(A,\vec{A},+)$ satisfying $f(p+v)=f(p)+v$ for all $p\in A$ and $v\in\vec{A}$ is a translation.
4. Show that the bijections of $\{1,2,3,4\}$ mapping $\{1,2\}$ onto itself and $\{3,4\}$ onto itself form an Abelian subgroup of $\operatorname{Sym}(\{1,2,3,4\})$ that is not strictly contained in any Abelian subgroup, but does not act transitively.

> [!hint]- Hint
> For 2, pick $s\in\mathcal{T}$ with $s(p)=f(p)$, and apply the argument showing that the action of $\mathcal{T}$ is free to $s^{-1}\circ f$. For 4, a bijection commuting with the swap of $1$ and $2$ maps the points that swap fixes to points it fixes.

#### Problem 10: Torsors Over Prime Fields $\star$

Let $A$ be a torsor under an Abelian subgroup $\mathcal{T}\leq\operatorname{Sym}(A)$, with integer multiples $nt$ as in Example 3. For a prime $\ell$, write $\mathbb{F}_\ell$ for the field $\mathbb{Z}/\ell\mathbb{Z}$.

1. Show that $\mathcal{T}$ admits a compatible scalar multiplication by $\mathbb{F}_\ell$ if and only if $\ell t=0$ for every 
	$t\in\mathcal{T}$, and that this scalar multiplication is then unique.
2. Show that if $\mathcal{T}$ admits a compatible scalar multiplication by $\mathbb{Q}$, it admits only one.

Now let $A:=\{0,1,2,3\}$, and let $\mathcal{T}\leq\operatorname{Sym}(A)$ consist of the four maps $x\mapsto x+k\bmod4$ with 
$k\in A$.

3. Show that $\mathcal{T}$ admits no compatible scalar multiplication by any field.
4. Find an Abelian subgroup $\mathcal{T}'\leq\operatorname{Sym}(A)$, different from $\mathcal{T}$, under which $A$ is a torsor and which admits a compatible scalar multiplication by $\mathbb{F}_2$.

> [!hint]- Hint
> For 1 and 2, compose a ring homomorphism out of $\mathbb{F}_\ell$ or $\mathbb{Q}$ with the quotient map $\mathbb{Z}\to\mathbb{F}_\ell$ or the inclusion $\mathbb{Z}\to\mathbb{Q}$, and compare with Example 3. In 2, $\rho(1/n)$ must be the inverse of $\rho(n)$. For 3, follow the argument for the circle in Example 3. For 4, write the points in binary.

#### Problem 11: Complex Structures on the Plane $\star$

Let $\mathcal{T}$ be the translations of the canonical affine space of $\mathbb{R}^2$, with the real scalar multiplication $\lambda\tau_v:=\tau_{\lambda v}$, and identify $\mathcal{T}$ with $\mathbb{R}^2$ through the linear isomorphism $v\mapsto\tau_v$. Under this identification, the complex structure $J$ of Example 5 is
$$
\begin{aligned}
J_0:\mathbb{R}^2&\to\mathbb{R}^2; \\
(x,y)&\mapsto(-y,\ x).
\end{aligned}
$$

1. Show that every compatible scalar multiplication $\rho:\mathbb{C}\to\operatorname{End}(\mathcal{T})$ extending the real one satisfies $\rho(a+bi)=a\operatorname{id}_{\mathcal{T}}+b\,\rho(i)$, and that conversely, for every complex structure $J$ on $\mathcal{T}$, the formula $\rho(a+bi):=a\operatorname{id}_{\mathcal{T}}+bJ$ defines such a scalar multiplication.
2. Show that a linear map $J\in\operatorname{End}(\mathbb{R}^2)$ satisfies $J^2=-\operatorname{id}$ if and only if $\operatorname{tr}J=0$ and $\det J=1$.
3. Deduce that the compatible scalar multiplications by $\mathbb{C}$ extending the real one correspond to the maps $J(x,y)=(ax+by,\ cx-ay)$ with $a,b,c\in\mathbb{R}$ and $a^2+bc=-1$.
4. For a complex structure $J$ and $\theta\in\mathbb{R}$, write $e^{\theta J}:=\cos\theta\operatorname{id}_{\mathcal{T}}+\sin\theta\,J$. Show that $e^{\theta J}\circ e^{\varphi J}=e^{(\theta+\varphi)J}$ and $\det e^{\theta J}=1$, and that the scalar multiplication given by $J$ satisfies $\rho(re^{i\theta})=r\,e^{\theta J}$ for all $r\geq0$ and $\theta\in\mathbb{R}$.
5. Show that every complex structure on $\mathbb{R}^2$ is given by $h\circ J_0\circ h^{-1}$ for some linear isomorphism $h$ of $\mathbb{R}^2$. Deduce that every compatible scalar multiplication $\rho$ by $\mathbb{C}$ extending the real one satisfies $\rho(\lambda)=h\circ\rho_0(\lambda)\circ h^{-1}$ for all $\lambda\in\mathbb{C}$, where $\rho_0$ is the scalar multiplication of Example 5.

> [!hint]- Hint
> For the first claim in 1, follow Example 5; for the converse, expand $(a+bJ)(c+dJ)$. For 2, the Cayley–Hamilton theorem gives $J^2-(\operatorname{tr}J)J+(\det J)\operatorname{id}=0$ for every $J\in\operatorname{End}(\mathbb{R}^2)$. For 4, use $J^2=-\operatorname{id}$ and the angle addition formulas; for the determinant, expand $\det(\cos\theta\operatorname{id}+\sin\theta\,J)$ using part 2. For 5, pick $v\neq0$; then $(v,Jv)$ is a basis, and $h$ can be chosen with $h(e_1)=v$ and $h(e_2)=Jv$.

#### Problem 12: Relativistic Velocity Addition $\star$

Let $A:=(-1,1)$, thought of as velocities measured as fractions of the speed of light. For $a\in\mathbb{R}$, define
$$
\begin{aligned}
t_a:A&\to A; \\
x&\mapsto\frac{x+\tanh a}{1+x\tanh a}.
\end{aligned}
$$

1. Show that $\operatorname{atanh}\bigl(t_a(x)\bigr)=\operatorname{atanh}(x)+a$ for every $x\in A$, and deduce that $\mathcal{T}:=\{t_a:a\in\mathbb{R}\}$ is an Abelian subgroup of $\operatorname{Sym}(A)$ under which $A$ is a torsor.

Give $\mathcal{T}$ the compatible scalar multiplication $\lambda t_a:=t_{\lambda a}$.

2. Show that for $v\in A$, the point $0+\tfrac{1}{2}(v-0)$ halfway from $0$ to $v$ is $v/\bigl(1+\sqrt{1-v^2}\bigr)$, and that it is greater than $v/2$ when $0<v<1$.

> [!hint]- Hint
> For 1, use the addition formula for $\tanh$. For 2, the displacement from $0$ to $v$ is $t_{\operatorname{artanh}v}$, and $\tanh(u/2)=\sinh u/(1+\cosh u)$.

#### Problem 13: A Change of Origin as a Linear Map

Let $V:=\vec{A}\times\mathbb{F}$, and let
$$
\begin{aligned}
\ell:V&\to\mathbb{F}; \\
(v,\lambda)&\mapsto\lambda.
\end{aligned}
$$
By Example 1, $\bigl(\ell^{-1}(1),\ker\ell,+\bigr)$ is an affine space, with point set $\vec{A}\times\{1\}$ and model space
$\vec{A}\times\{0\}$. Fixing $o\in A$, let $\phi_o$ be the identification given by choosing $o$ as the origin, and define
$$
\begin{aligned}
\phi_o:A&\to\vec{A}; & \psi_o:A&\to\vec{A}\times\{1\}; \\
p&\mapsto p-o, & p&\mapsto\bigl(\phi_o(p),1\bigr).
\end{aligned}
$$

1. Show that $\psi_o$ is a bijection with $\psi_o(p+v)=\psi_o(p)+(v,0)$ and $\psi_o(q)-\psi_o(p)=(q-p,0)$ for all $p,q\in A$ and $v\in\vec{A}$.
2. Let $o'\in A$ be a second origin. Show that there is exactly one linear map $S:V\to V$ with $S\circ\psi_o=\psi_{o'}$ and $S(v,0)=(v,0)$ for every $v\in\vec{A}$, and that $S(v,\lambda)=\bigl(v+\lambda(o-o'),\lambda\bigr)$.
3. Show that $S(v,1)=\bigl((\phi_{o'}\circ\phi_o^{-1})(v),1\bigr)$ for every $v\in\vec{A}$.

> [!hint]- Hint
> For 2, every vector of $V$ is the sum of a vector in $\vec{A}\times\{0\}$ and a multiple of $(0,1)=\psi_o(o)$, and Chasles' identity gives $(p-o)+(o-o')=p-o'$.

#### Problem 14: Lines Through the Origin $\star$

For $a\in\mathbb{R}$, write $U_a:=\operatorname{span}\{(a,1)\}$, and let $\mathcal{U}:=\{U_a:a\in\mathbb{R}\}$. For $c\in\mathbb{R}$, define
$$
\begin{aligned}
s_c:\mathbb{R}^2&\to\mathbb{R}^2; \\
(x,y)&\mapsto(x+cy,\ y).
\end{aligned}
$$

1. Show that $\mathcal{U}$ is the set of lines through the origin in $\mathbb{R}^2$ other than the $x$-axis, that $U_a=U_b$ only if $a=b$, and that $s_c$ carries $U_a$ onto $U_{a+c}$.
2. Deduce that the maps
   $$
   \begin{aligned}
   t_c:\mathcal{U}&\to\mathcal{U}; \\
   U&\mapsto s_c(U)
   \end{aligned}
   $$
   form an Abelian subgroup of $\operatorname{Sym}(\mathcal{U})$ acting transitively on $\mathcal{U}$, and that $\lambda t_c:=t_{\lambda c}$ makes $\mathcal{U}$ an affine space.

More generally, let $V$ be an $\mathbb{F}$-vector space and $W\subseteq V$ a subspace. A _complement_ of $W$ is a subspace $U\subseteq V$ with $V=W\oplus U$; let $A$ be the set of complements of $W$, and assume it is nonempty. Let
$$
\mathcal{S}_W:=\{g\in\operatorname{End}(V):g(V)\subseteq W,\ g(W)=0\},
$$
and call a map $\operatorname{id}_V+g$ with $g\in\mathcal{S}_W$ a _shear along $W$_. For $V=\mathbb{R}^2$ and $W$ the $x$-axis, $A=\mathcal{U}$, and the shears along $W$ are given by the maps $s_c$.

3. Show that $\mathcal{S}_W$ is a vector subspace of $\operatorname{End}(V)$, and that $g\circ h=0$ for all $g,h\in\mathcal{S}_W$.
4. Show that each shear fixes $W$ pointwise and is invertible, and deduce that it carries complements of $W$ to complements of $W$, so that each $g\in\mathcal{S}_W$ defines a map
   $$
   \begin{aligned}
   t_g:A&\to A; \\
   U&\mapsto(\operatorname{id}_V+g)(U).
   \end{aligned}
   $$
5. Show that $t_g\circ t_h=t_{g+h}$, and that $t_g=\operatorname{id}_A$ only if $g=0$.
6. Show that $\mathcal{T}:=\{t_g:g\in\mathcal{S}_W\}$ acts transitively on $A$, and deduce that $\lambda t_g:=t_{\lambda g}$ makes $(A,\mathcal{T},\cdot)$ the intrinsic data of an affine space.

> [!hint]- Hint
> For 1, consider where each line meets the line $y=1$. For 3, the image of $h$ lies in $W$, where $g$ vanishes. For 4, compute $(\operatorname{id}_V+g)\circ(\operatorname{id}_V-g)$, and apply the shear to $V=W\oplus U$. For 5, if $t_g=\operatorname{id}_A$, show that $g(u)\in U\cap W$ for every $u$ in a complement $U$. For 6, given $U$ and $U'$, write each $u\in U$ as $u=w+u'$ with $w\in W$ and $u'\in U'$, and set $g(u):=-w$.

#### Problem 15: Complements as Graphs $\star$

Let $V$, $W$, $A$, $\mathcal{S}_W$ and the maps $t_g$ be as in Problem 14. Fix $U\in A$, and let
$$
\begin{aligned}
\pi_U:V&\to U; \\
w+u&\mapsto u
\end{aligned}
$$
be the projection along $W$, where $w\in W$ and $u\in U$.

1. Show that every $U'\in A$ is the graph $\{u+f(u):u\in U\}$[^9] of exactly one linear map $f:U\to W$.
2. Show that $f\circ\pi_U\in\mathcal{S}_W$, and that $t_{f\circ\pi_U}(U)$ is the graph of $f$.
3. Deduce that the induced vector space structure on $A$ with origin $U$ is given by $\operatorname{graph}f+_U\operatorname{graph}f'=\operatorname{graph}(f+f')$ and $\lambda\cdot_U\operatorname{graph}f=\operatorname{graph}(\lambda f)$.
4. For $V=\mathbb{R}^2$, $W$ the $x$-axis and $U_a$ as in Problem 14, show that $U_a+_{U_0}U_b=U_{a+b}$, and that $U_a+_{U_d}U_b=U_{a+b-d}$ for every $d\in\mathbb{R}$.

> [!hint]- Hint
> For 1, decompose each $u\in U$ along $V=W\oplus U'$. For 2, check that $\operatorname{id}_V+f\circ\pi_U$ sends each $u\in U$ to $u+f(u)$. For 4, write $U_a$ as a graph over $U_d$.

## For Fun $\star\star$

#### Problem 16: Conics $\star\star$

Let $\mathbb{F}$ be a field with $\operatorname{char}\mathbb{F}\neq2$, and consider the parabola
$$
P:=\{(x,y)\in\mathbb{F}^2:y=x^2\}
$$
and the hyperbola
$$
H:=\{(x,y)\in\mathbb{F}^2:xy=1\}.
$$
For $c\in\mathbb{F}$ and $\lambda\in\mathbb{F}^\times$, define
$$
\begin{aligned}
T_c:\mathbb{F}^2&\to\mathbb{F}^2; & D_\lambda:\mathbb{F}^2&\to\mathbb{F}^2; \\
(x,y)&\mapsto(x+c,\ y+2cx+c^2), & (x,y)&\mapsto(\lambda x,\ \lambda^{-1}y).
\end{aligned}
$$

1. Show that each $T_c$ maps $P$ onto itself and that $T_b\circ T_c=T_{b+c}$. Deduce that $P$ is a torsor under the restrictions of the maps $T_c$, and that $\lambda T_c:=T_{\lambda c}$ makes $P$ an affine space.
2. Show that the midpoint of $(a,a^2)$ and $(b,b^2)$ in $P$, as defined in Problem 2, is $\bigl(\tfrac{a+b}{2},(\tfrac{a+b}{2})^2\bigr)$, and that this is not their midpoint in $\mathbb{F}^2$ unless $a=b$.
3. Show that $H$ is a torsor under the restrictions of the maps $D_\lambda$, and that for $\mathbb{F}=\mathbb{R}$ this group admits no compatible scalar multiplication by any field.

Now let $\mathbb{F}=\mathbb{C}$, let $C$ be the circle $\{(x,y)\in\mathbb{C}^2:x^2+y^2=1\}$, and for $a,b\in\mathbb{C}$ with $a^2+b^2=1$ define
$$
\begin{aligned}
\psi:\mathbb{C}^2&\to\mathbb{C}^2; & R_{a,b}:\mathbb{C}^2&\to\mathbb{C}^2; \\
(x,y)&\mapsto(x+iy,\ x-iy), & (x,y)&\mapsto(ax-by,\ bx+ay).
\end{aligned}
$$

4. Show that $\psi$ restricts to a bijection $C\to H$, and that $\psi\circ R_{a,b}=D_{a+ib}\circ\psi$.

For a polynomial $g$ of degree $2$ in $x$ and $y$, the _directions at infinity_ of the curve $g=0$ are the lines through the origin on which the degree-$2$ part of $g$ vanishes.

5. Show that over $\mathbb{R}$, the parabola $P$ has one direction at infinity and the hyperbola $H$ has two, and that the circle $x^2+y^2=1$ has none over $\mathbb{R}$ and two over $\mathbb{C}$.

> [!hint]- Hint
> For 1, $T_{b-a}$ takes $(a,a^2)$ to $(b,b^2)$. For 3, $D_{-1}$ plays the role of the half turn $r_\pi$ in Example 3. For 4, use $(x+iy)(x-iy)=x^2+y^2$ and $(a+ib)(a-ib)=1$. For 5, the degree-$2$ parts are $-x^2$, $xy$ and $x^2+y^2$.

#### Problem 17: Infinitesimal Points $\star\star$

Let $\mathbb{F}[\varepsilon]:=\mathbb{F}[x]/(x^2)$ be the quotient of the polynomial ring $\mathbb{F}[x]$ by the ideal generated by $x^2$, where $\varepsilon:=[x]$, so that $\varepsilon^2=0$. For a polynomial $f$ in $n$ variables over $\mathbb{F}$ and $p,v\in\mathbb{F}^n$, the expression $f(p+tv)$ is a polynomial in $t$, and we write $D_vf(p)$ for its coefficient of $t$. Over $\mathbb{R}$, $D_vf(p)$ is the derivative of $f$ at $p$ in the direction $v$.

1. Show that every element of $\mathbb{F}[\varepsilon]$ can be written uniquely as $a+b\varepsilon$ with $a,b\in\mathbb{F}$, so that $\mathbb{F}[\varepsilon]$ and $\mathbb{F}[x]_{\leq1}$ have the same underlying vector space, and that $(a+b\varepsilon)(c+d\varepsilon)=ac+(ad+bc)\varepsilon$. Deduce that every element of $\mathbb{F}[\varepsilon]^n$ can be written uniquely as $p+\varepsilon v$ with $p,v\in\mathbb{F}^n$.
2. Show that $f(p+\varepsilon v)=f(p)+\varepsilon\,D_vf(p)$, and that $D_vf(p)=f(p+v)-f(p)$ when $f$ has degree at most $1$.
3. Over $\mathbb{F}_2$, show that $x^2+x$ vanishes at $0$ and $1$, but takes the value $\varepsilon$ at both $\varepsilon$ and $1+\varepsilon$.
4. Show that $x^4+x^2$ vanishes at every element of $\mathbb{F}_2[\varepsilon]$.
5. Let $\mathbb{F}_4:=\{0,1,\omega,1+\omega\}$ be the field with four elements, where $\omega^2=1+\omega$. Show that $x^4+x^2$ takes the value $1$ at $\omega$.

> [!hint]- Hint
> For 2, substitute $t=\varepsilon$ into $f(p+tv)$; every power $t^k$ with $k\geq2$ becomes $0$. For 3 and 4, use $2=0$ in $\mathbb{F}_2$. For 5, compute $\omega^4=(1+\omega)^2$.

---
## References

- Walter Noll, _Finite-Dimensional Spaces: Algebra, Geometry, and Analysis_, Vol. I, Martinus Nijhoff, 1987, Chapter 3. A corrected reprint is [freely available](https://kilthub.cmu.edu/articles/journal_contribution/Finite-Dimensional_Spaces_Algebra_Geometry_and_Analysis_Volume_I/6477443) from Carnegie Mellon University.
- A. I. Kostrikin and Yu. I. Manin, _Linear Algebra and Geometry_, translated by M. E. Alferieff, Gordon and Breach, 1989, Chapter 3, §1.

[^1]: $\star$ Apart from Example 3, nothing in this article requires $\mathbb{F}$ to be a field: replacing $\mathbb{F}$ by a ring $R$ and $\vec{A}$ by a left $R$-module, every construction and argument goes through unchanged. Fields (or division rings) become necessary once bases and dimension enter the series.

[^2]: $\star$ For a general subgroup of $\operatorname{Sym}(A)$, evaluation is a left action, as $(t\circ s)(p)=t(s(p))$ applies $s$ first. Since $\mathcal{T}$ is Abelian, the two orders agree, and writing the action on the right matches the notation $p+v$.

[^3]: Torsors are also called _principal homogeneous spaces_.

[^4]: On the left, $+$ names the action $A\times\vec{A}\to A$ from the opening rather than addition in $\vec{A}$, so this sets $\vec{A}:=\mathcal{T}$ and takes the action to be evaluation.

[^5]: The sum is written with $\circ$ because the group operation of $\mathcal{T}$ is composition; in the additive notation of the previous subsection, it reads $(\alpha+\beta)(t)=\alpha(t)+\beta(t)$.

[^6]: Comparing with the four axioms above, $\rho(\lambda)$ preserving addition corresponds to distributivity over translations, while $\rho$ preserving products, identities, and sums corresponds to the remaining three axioms.

[^7]: Explicitly, $\bigl(o+\lambda(p-o)\bigr)-p=(o-p)+\lambda(p-o)=(1-\lambda)(o-p)$.

[^8]: The domain and codomain are written as $\vec{A}_o$ and $\vec{A}_{o'}$ rather than $A$ to record that this is a map between two different vector spaces on the same point set.

[^9]: Formally, an element of the direct sum $W\oplus U$ is a pair with one component in each summand, and $w+u$ is convenient notation for the pair with components $w$ and $u$. In this notation, the graph $\{(u,f(u)):u\in U\}$ of $f$ is written $\{u+f(u):u\in U\}$, and $\pi_U$ sends $w+u$ to $u$.

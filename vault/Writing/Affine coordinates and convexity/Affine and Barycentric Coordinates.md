---
publish: true
title: Affine and Barycentric Coordinates
subject: Affine coordinates and convexity
slug: affine-and-barycentric-coordinates
status: Working note
order: 90
description: Coordinates relative to an ordered affine basis.
---

## Affine Coordinates

Given an $N$-dimensional affine space $\mathcal{A}:=(A,\vec{A},+,-)$ with ordered [[Affine Basis|affine basis]] 
$$B:=(p_0,p_1,\dots,p_N),$$ every point $p\in A$ may be represented as an [[Affine Combinations|affine combination]]

$$
\begin{align}
p&=\sum_{i=0}^N\lambda_i p_i\\
&=p_0+\sum_{i=1}^N\lambda_i(p_i-p_0).
\end{align}
$$

Using the origin dependent identification of $A$ with $\vec{A}$

$$
\phi_{p_0}:A\to\vec{A};\qquad p\mapsto p-p_0,
$$

we may identify every point $p$ with the displacement vector $\displaystyle\sum_{i=1}^N\lambda_i(p_i-p_0)$.

As $B$ is a basis of $A$, $\vec{B}:=((p_1-p_0),\dots,(p_N-p_0))$ must be an ordered basis for $\vec{A}$, and therefore the coefficients $\lambda_i$ must all be unique.

Thus using the vector space isomorphism

$$
\Phi_{\vec B}:\vec{A}\to\mathbb{R}^N;\qquad (p_i-p_0)\mapsto e_i
$$

induced by our basis, we may uniquely identify every point $p$ with the $N$-tuple $(\lambda_1,\dots,\lambda_N)$ through the coordinate map

$$
\Psi:=\Phi_{\vec B}\circ\phi_{p_0}:A\to\mathbb{R}^N.
$$

Such an identification is known as an affine coordinate system, and the $N+1$ tuple 
$(p_0,(p_1-p_0),\dots,(p_N-p_0))$ needed to recover a point from these coordinates is known as an affine frame.

The main benefit of using an affine coordinate system is that it allows us to work directly with elements of $\mathbb{R}^N$ which have a simple additive structure while preserving the additive structure on $A$. In particular, for points $$p:=\sum_{i=0}^N\lambda_{i}p_{i},\quad q:=\sum_{i=0}^N\mu_{i}p_{i},\quad x:=\sum_{i=0}^N\eta_{i}p_{i}$$we have that $$\begin{align}
\Psi(p)+(\Psi(q)-\Psi(x))&=\sum_{i=1}^N\lambda_{i}e_{i}+ \left( \sum_{j=0}^N\mu_{j}e_{j}-\sum_{k=0}^N\eta_{k}e_{k} \right) \\
&=\sum_{i=1}^N(\lambda_{i}+(\mu_{i}-\eta_{i}))e_{i} \\
&=\Psi(p+(q-x)) \\
&=\Psi(p)+\Phi_{\vec{B}}(q-x).
\end{align}$$
Despite these nice properties, it is important to note that the vector space operations on $\mathbb{R}^N$ can only be interpreted in the context of the chosen origin $p_0$, and expressions such as $$ax+by:=\Psi^{-1}(a\Psi(x))+\Psi^{-1}(b\Psi(y))$$for scalars $a,b\in\mathbb{R}$ and $x,y\in A$ are not generally origin independent when interpreted as combinations of points. This is because  $\Psi$ identifies $A$ with $\mathbb{R}^N$ as an affine space over itself, and in general the only well defined sums are those that are [[Affine Combinations|affine combinations]] in $\mathbb{R}^N.$

## Barycentric Coordinates

Rather than arbitrarily choose an origin and define a coordinate system by identifying an affine space $A$ with its space of displacements, one could instead take the fact that every affine basis already supplies an origin independent list of unique coordinates for every point 
$p\in A$ through its affine representation

$$
p=\sum_{i=0}^N\lambda_i p_i.
$$

Defining the map

$$
\Phi_B:A\to\mathbb{R}^{N+1};\qquad p_i\mapsto e_{i+1}
$$

and extending it affinely (meaning $\Phi_B\left(\displaystyle\sum_{i=0}^N\lambda_i p_i\right)=\displaystyle\sum_{i=0}^N\lambda_i\Phi_B(p_i)$ whenever $\displaystyle\sum_{i=0}^N\lambda_i=1$), we may identify $A$ with the $N$-dimensional affine subspace

$$
\begin{align}
\Phi_{B}(A)&=\left\{
(\lambda_{0},\dots,\lambda_{N})
\in\mathbb{R}^{N+1}:\sum_{i=0}^N\lambda_i=1
\right\} \\
&=
(1,0,\dots,0)
+
\operatorname{span}\left\{
(-1,1,\dots,0),\dots,(-1,0,\dots,1)
\right\}.
\end{align}
$$

Such an identification is known as a barycentric coordinate system, which is naturally paired with an ordered affine basis to recover the original space $A$.

The main advantage of barycentric coordinates over affine coordinates is that they make direct use of affine combinations without singling out any specific point as an origin. Because of this, $\Phi_{B}(A)$ is not a vector subspace of $\mathbb{R}^{N+1},$ and we may not in general form problematic expressions like $\Phi_{B}(p)+\Phi_{B}(q).$ 

As with affine coordinates, barycentric coordinates **do** preserve the affine structure of a space: writing $$p:=\sum_{i=0}^N\lambda_{i}p_{i},\quad q:=\sum_{i=0}^N\mu_{i}p_{i},\quad x:=\sum_{i=0}^N\eta_{i}p_{i}$$we have

$$\begin{align}
\Phi_{B}(p)+(\Phi_{B}(q)-\Phi_{B}(x))&=\sum_{i=1}^{N+1}\lambda_{i}e_{i}+ \left( \sum_{j=1}^{N+1}\mu_{j}e_{j}-\sum_{k=1}^{N+1}\eta_{k}e_{k} \right) \\
&=\sum_{i=1}^{N+1}(\lambda_{i}+(\mu_{i}-\eta_{i}))e_{i} \\
&=\Phi_{B}(p+(q-x)).
\end{align}$$

## Relationship Between Coordinate Systems

Although affine and barycentric coordinates are constructed differently, they contain the same information. Given the same ordered affine basis $B$, the barycentric coefficients satisfy

$$
\sum_{i=0}^N\lambda_i=1,
$$

and therefore the zeroth coefficient is uniquely determined by the remaining $N$ coefficients:

$$
\lambda_0=1-\sum_{i=1}^N\lambda_i.
$$

Thus we may pass from affine coordinates to barycentric coordinates through the affine isomorphism

$$
\begin{align}
\Psi:\mathbb{R}^N&\to\left\{(\lambda_0,\dots,\lambda_N)\in\mathbb{R}^{N+1}:\sum_{i=0}^N\lambda_i=1\right\};\\
(\lambda_1,\dots,\lambda_N)&\mapsto\left(1-\sum_{i=1}^N\lambda_i,\lambda_1,\dots,\lambda_N\right).
\end{align}
$$

Conversely, the inverse map recovers the affine coordinates by simply discarding the zeroth barycentric coefficient:

$$\begin{align}
\Psi^{-1}:\left\{(\lambda_0,\dots,\lambda_N)\in\mathbb{R}^{N+1}:\sum_{i=0}^N\lambda_i=1\right\}&\to \mathbb{R}^N; \\
(\lambda_{0},\dots,\lambda_{N})&\mapsto(\lambda_{1},\dots,\lambda_{N}).
\end{align}$$

Hence the only distinction between the two is how the affine structure on the space is realized and the dimension of the ambient space of our embedding.

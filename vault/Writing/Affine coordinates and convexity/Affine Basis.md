---
publish: true
title: Affine Basis
subject: Affine coordinates and convexity
slug: affine-basis
status: Working note
order: 80
description: How a basis of points determines every point in an affine space.
---

## Definition

Given an $N$-dimensional affine space $\mathcal{A}:=(A,\vec{A},+,-)$,  an affine basis of $A$ is any [[Affine Independence|affinely independent]] set of points
$$B:=\{ p_{0},p_{1},\dots,p_{N} \}.$$
As such a set $B$ is affinely independent if and only if every point in the $N$ dimensional affine subspace $\operatorname{Aff}(B)$ has a unique representation, and the only $N$ dimensional affine subspace of $A$ is $A$ itself, we can conclude that an affine basis generates every element of $A$ through a unique affine combination of its points.

## Example: An Affine Line in $\mathbb{R}^3$

Let $\mathcal{A}$ be the $1$-dimensional affine subspace of $\mathbb{R}^3$ given by
$$A:=\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}+\operatorname{span}\left\{\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}  \right\},\quad\vec{A}:=\operatorname{span}\left\{\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}  \right\}$$
and let an affine basis of $A$ be the set
$$B:=\left\{ \begin{bmatrix}
1 \\
1 \\
2
\end{bmatrix},\begin{bmatrix}
-1 \\
-1 \\
0
\end{bmatrix} \right\}.$$
As $B$ has only two elements, and the points are distinct, this set is trivially affinely independent and is therefore a valid basis.

To see how we can explicitly write every element of $A$ as an affine combination of the points, denote by $p_{0},p_{1}$ the points$$\begin{bmatrix}
1 \\
1 \\
2
\end{bmatrix},\quad \begin{bmatrix}
-1 \\
-1 \\
0
\end{bmatrix},$$
respectively.

Next, we can recognize that the base point$$\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}$$
may be written as 
$$\frac{1}{2}p_{0}+\frac{1}{2}p_{1}=p_{0}+\frac{1}{2}(p_{1}-p_{0},)$$

while the displacement vector $$\begin{bmatrix}
1 \\
1 \\
1 \\
\end{bmatrix}$$ may be written in terms of the displacement vector $(p_{1}-p_{0})$ as

$$-\frac{1}{2}(p_{1}-p_{0}).$$
Thus every point $p\in A$ may be expressed as 
$$\begin{align}
p&=\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}+t\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix} \\
&=\frac{1}{2}p_{0}+\frac{1}{2}p_{1}-\frac{t}{2}(p_{1}-p_{0}) \\
&=p_{0}+\frac{(1-t)}{2}(p_{1}-p_{0}).
\end{align}$$
Defining $$\lambda_{0}:=\frac{1+t}{2},\quad \lambda_{1}=\frac{1-t}{2},$$
this gives a unique affine representation of $p$ in terms of $p_{0}$ and $p_{1}$ as

$$p=\lambda_{0}p_{0}+\lambda_{1}p_{1}.$$
Since affine spaces are closed under the taking of affine combinations, and $p_{0},p_{1}\in A$, we can therefore conclude that every point in $A$ may be expressed as an affine combination of the elements of $B$, and every affine combination of those elements lie in $A$.

## Example: An Affine Plane in $\mathbb{R}^5$

Let $\mathcal{A}$ be the [[Affine Hull|affine hull]] of the set 

$$S:=\left\{ \begin{bmatrix}
1 \\
1 \\
0 \\
0 \\
0
\end{bmatrix},\begin{bmatrix}
1 \\
-1 \\
0 \\
0 \\
0
\end{bmatrix},\begin{bmatrix}
0 \\
0 \\
1 \\
1 \\
1
\end{bmatrix} \right\}.$$
Defining $$p_{0}=\begin{bmatrix}
1 \\
1 \\
0 \\
0 \\
0
\end{bmatrix},\quad p_{1}=\begin{bmatrix}
1 \\
-1 \\
0 \\
0 \\
0
\end{bmatrix},\quad p_{2}=\begin{bmatrix}
0 \\
0 \\
1 \\
1 \\
1 \\
\end{bmatrix},$$
we can see that $S$ is already a basis for it's own hull, as 
$$(p_{1}-p_{0})\neq c(p_{2}-p_{0})$$
for any scalar $c\in \mathbb{R}.$ Thus the vectors $(p_{1}-p_{0}),$ $(p_{2}-p_{0})$ are linearly independent and therefore $S$ is affinely independent.

Despite being a subset of $\mathbb{R}^5,$ this affine space has affine dimension $2$, as its vector space of translations is two dimensional.

To characterize $A$ more explicitly in terms of the ambient coordinates of $\mathbb{R}^5$, we may write an arbitrary $p\in A$ as

$$
\begin{align}
p&=\lambda_{0}p_{0}+\lambda_{1}p_{1}+\lambda_{2}p_{2} \\
&=p_{0}+\lambda_{1}(p_{1}-p_{0})+\lambda_{2}(p_{2}-p_{0}) \\
&=\begin{bmatrix} 1 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix}+\begin{bmatrix} 0 \\ -2\lambda_{1} \\ 0 \\ 0 \\ 0 \end{bmatrix}+\begin{bmatrix} -\lambda_{2} \\ -\lambda_{2} \\ \lambda_{2} \\ \lambda_{2} \\ \lambda_{2} \end{bmatrix} \\
&=\begin{bmatrix} 1-\lambda_{2} \\ 1-(2\lambda_{1}+\lambda_{2}) \\ \lambda_{2} \\ \lambda_{2} \\ \lambda_{2} \end{bmatrix}.
\end{align}
$$

Using the fact that the coefficients of an affine combination must sum to 1, we may rewrite

$$
1-\lambda_{2}=\lambda_{0}+\lambda_{1},\quad 1-(2\lambda_{1}+\lambda_{2})=1-(\lambda_{1}+\lambda_{2})-\lambda_{1}=\lambda_{0}-\lambda_{1}
$$

to obtain

$$
p=\begin{bmatrix} \lambda_{0}+\lambda_{1} \\ \lambda_{0}-\lambda_{1} \\ \lambda_{2} \\ \lambda_{2} \\ \lambda_{2} \end{bmatrix}.
$$

Letting the ambient coordinates of $p$ be $x_{1},x_{2},x_{3},x_{4},x_{5}$, we can identify the following constraints:

$$
x_{3}=x_{4}=x_{5},\quad x_{1}+x_{3}=1.
$$

To see that $x_{2}$ is unrestricted, we may substitute $\lambda_{0}=1-\lambda_{1}-\lambda_{2}$ to obtain

$$
x_{2}=\lambda_{0}-\lambda_{1}=1-2\lambda_{1}-\lambda_{2}.
$$

Since $\lambda_{1},\lambda_{2}\in\mathbb{R}$ may be chosen independently, $x_{2}$ can assume any real value independently of $x_{3}=\lambda_{2}$.

Consequently, the affine hull $A$ may be parameterized explicitly in terms of real variables $s$ and $t$ as

$$
A=\left\{\begin{bmatrix} 1-s \\ t \\ s \\ s \\ s \end{bmatrix}:s,t\in\mathbb{R}\right\}.
$$



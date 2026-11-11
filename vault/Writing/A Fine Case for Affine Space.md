---
publish: true
title: A Fine Case for Affine Space
slug: a-fine-case-for-affine-space
subject: Affine geometry
status: Introduction to Affine Spaces
description: Why distinguish points from vectors? A short motivation for affine spaces.
order: 30
---

![[Screenshot from 2025-08-25 02-43-58.png]]
#### "Origin-al Sin"
Three of the most influential figures in formally describing space -- Euclid, Galileo, and Einstein -- all agreed on one fundamental aspect in their descriptions: space is seemingly homogeneous with no preferred points (sorry Newton).

This should naturally lead anyone who has taken an undergraduate math course to question why vector spaces, which possess a distinct origin, are the default algebraic setting for most applications of geometry.

This question has a rather simple answer: rather than points in space belonging to a vector space, they belong to a more abstract structure called an **affine space**, in which displacements between points are defined using vectors. Every affine space possesses an associated vector space of displacements, and this vector space uniquely characterizes the affine space up to isomorphism.

The ability to identify an affine space with its associated vector space is exactly why most courses neglect any mention of affine spaces. Working with the displacement vectors between points rather than the points themselves skips a lot of formalism that an engineering student might never have been exposed to and possibly never will be exposed to.

This would be fine if it weren't for the fact that treating points like vectors leads to questions like "what is the sum of London and Paris?"  The answer to this question is both entirely dependent on your choice of origin, and most certainly more confusing than useful. This is why affine space frameworks are used in places such as computer graphics, where allowing the formation of such expressions could cause very odd edge case behavior.

Unfortunately working with affine spaces isn't as easy as just forgetting the origin and moving on: it requires a decent amount of development to be workable. It'd be cool if someone wrote some articles doing that.












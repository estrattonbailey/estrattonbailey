---
title: All Code Should be Easily Replaceable
date: 2022-02-02
---

# Creating generic programs or, all code should be easily replaceable

Architecting a system to be reusable and composable in yet-unknown-ways is
hard, sometimes stupid, but usually worth it.

It's probably fine.

There's wisdom in trying to avoid looking too far in the future and
focusing on getting something working. We're often constrained by time, user
needs, existing constructs like legacy code, and (obviously) lack of 20/20
hindsight that may convince us later on we should have thought of something
earlier.

But stuff so often gets built that is obsolete almost immediately after
shipping. Needs change, or another tangential project needs to interface with
your system. But there isn't an interface! And the code is so focused on
achieving a single goal that adding in a second is difficult. And after you jam
the second in there, adding a third is probably impossible. So you start over.

On the other hand, being too concerned with making everything reusable can be paralyzing. It's
impossible to think of all possible use cases up front, and at a certain point
what matters is getting the job done.

I think successfull systems are defined by how many parts you can break them
into. Like when you need to add goal #2, how easily can you explode the system,
understand its contituents, and put it back together.

The difficulty inherent in understanding large systems is at the core of this.
Large systems have a lot of surface area. Without clear boundaries between
entities within the system, someone will pick up a ticket, tack a method here
and a prop there, and suddently previously independent things rely on one
another.

You wouldn't write an interface `createUserOfTypeX(...user)` without first
creating a lower-level interface like `createUser(typeX, ...user)`. The more you
can create edges with well defined low-level interfaces, the more opportunities
you'll have to compose them into something new if the need arises.

A lot of this stuff hardly requires thought, and doesn't add time. The time
you'll safe unit testing vs integration testing may be enough on its own.

No one should be thinking "all code has to be reusable". Actually, I think a
better phrase is **all code should be easily replaceable.**

### P.S.

##### 2022-02-02

Hot take. Another way to summarize this post might be "don't write
object-oriented code". Tbh though I'd just be curious to see an OO codebase that
doesn't suffer from blurry domain edges and unecessarily interrelated code. But
then, if you're writing code like that, why not just write more functions and
avoid the footgun in the first place?

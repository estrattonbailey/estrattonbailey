---
title: X With Y Questions, Or Everything Old Is New Again
description: How do I do X with Y?
---

# How do I do X with Y?

Kinda related to [how I like to learn](/notes/2021-12-17), I think a common code smell — need a better phrase for this, that's not quite right — is people asking "how do I do X with Y technology". Like, you might see "how do I set cookies with Express" or "how do I set cookies with Next.js", but the core question is of course "how does one set cookies on a server".

I was talking to my mom (a middle school teacher) again this morning about how students learn to write effectively and thought again of this tweet (no longer public) I linked in [this post.](/notes/2021-12-21)

> ‘lol’ and ‘lmao’ are actually both punctuation marks — [@raunchonpizza](https://twitter.com/raunchonpizza/status/1474874338885185536?s=20)

That's informal of course, but implicitly understood by most internet people. And I think it's prescient to identify them as punctuation. Other examples might be leaving off an ending period to indicate levity, or dropping a question mark to highlight sarcasm. If you know _how_ something works, like grammar, you can improvise within that framework and showcase intent. Doing more with less.

Understanding `set-cookie` headers can open up more possibilities for a developer. And frameworks that support users setting headers directly would require fewer questions like "X with Y" questions.

Frameworks that obscure this are doing it at best to improve ergonomics, and at worst to lock users into their systems. You could probably make both sides of a glass half full/empty argument for most examples of this. I think good abstractions are those that provide ergonomic options with direct low-level access when needed.

## P.S.

**2021-12-31**

We used to do with this jQuery. "How do I set a class in IE10" was blissfully abstracted to "how do I set a class with jQuery". Great success. Then browsers converged on a common API and jQuery wasn't needed anymore for small change like this. What was great about this was that jQuery was a layer on top of existing DOM APIs. You could drop down and use vanilla javascript at any time.

I think that's good. Like you're running bare bones tech, but can layer in niceties as you need them. Harder for new developers to piece together though.

---
layout: page_blog
title:  "Decoupling Software Components With Orthogonality"
date:   2015-11-12 06:00:00
categories: blog tech software-design
---

> As a Software Developer, you need to add a new feature into a Web App you have been working on for quite a time now.
> To add that one feature, at how many places will you be required to make a change?

If the answer is more than one, `Orthogonality` is your solution.

###So what is Orthogonality?
In mathematics, Orthogonality is the relation of two lines meeting at right angles to one another. For vectors, it
means that they are independent. Moving along either of the two does not change your position projected onto the other.

In computing, Orthogonality is defined as software features which are mutually exclusive to one another.

###Okay, can you give me some examples?
Consider a helicopter, having a `collective pitch lever` and a `cyclic` which are used to control its movement. When
you want to descend, you lower the collective pitch lever, but you need to apply a compensating force to the cyclic
which in turn has compensating side effects. In short, such a component is unbelievably complex, and hence, absolutely
not orthogonal.

On the other hand, a database layer completely independent from the user interface of a Web Application is an example
 of an orthogonal system.

More so, your computer monitor has orthogonal controls. You can change the brightness independently of the contrast
level, and (if the monitor has one) the color balance control will be independent of both. Imagine how much more
difficult it would be to adjust a monitor on which the brightness knob affected the color balance: you'd have to
compensate by tweaking the color balance every time after you changed the brightness.

###How is this idea helpful in software?
Orthogonality lets you make `complex programs manageable`. When you need to make a change in a software program, it helps
you to not be forced to keep the entire program in your head, but that one module or the class where the change needs to
be made. After the change is made, the rest of the program just works fine. In a purely orthogonal design, each change
in the program causes `no ripple effects` onto the other parts.

With the localization of changes, the code is easier to understand, document and reuse thus reducing the time for other
developers to be able to contribute to the project.

###I have a Big Codebase, how do I identify if it's Orthogonal?
To start with, one of the common mistakes people make is in the code which reads data in one source format and parses it
into another. A designer usually thinks of the input and the output being on the disk and thus includes the file transactions
in the conversion logic itself, while if the logic of conversion was orthogonal from that of reading and writing, the
same methods could have been used when data was supposed to be read from the network stream and written on stdout.


Apart from that, if you have the following in your project, it is highly likely to not be Orthogonal:

 - Thousands of classes and no one knows where things really happen

 - Classes do more than they are meant to do

 - Same constants defined at multiple places

 - A lot of people are involved in order to make a small change in the codebase

 - Lots of global data

 - Coupled code - modules share a lot of information with other modules

 - Similar functions

###How to make Software Modules Orthogonal?
There is no one-shot answer, but if some design practices could be followed religiously, a codebase could be make
orthogonal. To start with, one needs to make sure that there is no duplication in the system, and all modules expose
data no more than that is required, hence ensuring that there is `strictly one authoritative source of information`.
One must avoid the use of global data, since their values could be changed from any part of the system, hence increasing
the the cohesion among multiple modules. Also, one of the best ways to improve orthogonality is to reduce software
entropy as soon as any code smell is encountered.
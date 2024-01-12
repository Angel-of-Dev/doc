# The Dune Coffee Company

![](planet.png)

> A ruler must learn to persuade and not to compel.  
> He must lay the best coffee hearth to attract the finest men.
>
> -- [Frank Herbert](https://en.wikipedia.org/wiki/Frank_Herbert), [Dune](https://archive.org/details/frank-herberts-dune-saga-collection-books-1-6-by-frank-herbert/mode/2up)

---

A sound advice given to [Paul Atreides](https://en.wikipedia.org/wiki/Paul_Atreides) in the opening act of Frank Herbert's Dune.  
Some say that those words marked the beginning of **The Dune Coffee Company** that quickly seeded the whole planet Arrakis (known as Dune) with a network of vending machines serving the best [spice coffee](https://www.reddit.com/r/dune/comments/tcw924/i_made_as_best_i_could_dune_spice_coffee/) to the local [Fremen](https://en.wikipedia.org/wiki/Fremen) population.

:mag_right: But how exactly do you manage a fleet of thousands of vending machines on a remote planet? 

This series uses [.Net](https://en.wikipedia.org/wiki/.NET_Framework) and [JavaScript](https://en.wikipedia.org/wiki/JavaScript) to model world of Dune, individual vending machines and [Internet of Things (IoT)](https://en.wikipedia.org/wiki/Internet_of_things) infrastructure linking them together. 
We build [machine learning](https://en.wikipedia.org/wiki/Machine_learning) models to detect operational patterns, optimize performance and give the machines some autonomy in making their own decisions. 
We explore aspects of architecture, code and testing used to write and evolve those models in a safe and predictable way.

::: tip Artistic License
Being a science fiction novel, "Dune" provides only enough detail of its world to drive the story forward, leaving plenty to reader's imagination.  

Similarly, narrative of this series draws enough inspiration from Dune's world to keep going without a burden of absolute compatibility with the original story or any other book in the series.
:::

## How Coffee Vending Works (on Arrakis)

Let's start by having a closer look at how coffee works on our desert planet.  

**Water** is really hard to find on a dry surface of Arrakis, but luckily "wind trapping" technology can reclaim some of the ambient moisture, usually by cooling air below its [dew point](https://en.wikipedia.org/wiki/Dew_point). 
**Coffee beans**, **honey**, **donkey milk** (yikes!) and [The Spice](https://en.wikipedia.org/wiki/Melange_(fictional_drug)) are all sourced from the Fremen who live in communities called **sietches** and that's where we will deploy our first vending machine.

### Stilgar I, The First Vending Machine

![](stilgar-I-a.jpg)

**Stilgar I** uses small **solar panels** to power its **batteries**. 
It normally needs a few minutes of morning light to generate enough electricity to keep it going until the next day. 
Its **wind trap** works tirelessly (usually over night when temperature drops) to collect water needed to prepare drinks.   

Coffee beans, milk and other ingredients are replenished regularly by subcontractors working for local **Sietch Authorities** who also secure and maintain the machines. 
Each **Sietch Authority** operates differently, with some taking a flat fee for their services (paid in **Solari**, the local currency), a cut of profit from each cup sold or a mixture of both.  

Machines communicate using a rather **expensive satellite network** link. 
Connection is easily disrupted by **frequent sand storms** tumbling tirelessly across the planet and by strong magnetic field of one of its moons.

:mag_right: Wait, "one" of its moons? How many are there?!  

Find out in [the next part of the story](../orbital-dynamics/).


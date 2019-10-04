# Schibsted Frontend Assignment

### Brief description

This is a simple project, but I found very handy the usage of **ReactJS** as it helped to, in a very fast fashion, render lists dinamically with performance ease. As my personal coding preferences, I split whole code in the **components** (for stateless components) and **containers** (for the stateful ones). The simplicity of the project allowed me to use only **one** stateful component, and managed state normally within React flow, as using **Redux** would be overcomplicate it in my opinion. 

## Installation

In two separate terminals, firstly run in one:

```
node server.js
```

and in the second one:
```
npm start
```

### Ways to improve it

Although the project is small, still a couple of things could be done:

* Configure the server to have an unified endpoint for asll articles (*/articles*, anyway all data is merged somehow).
* Increase the number of media queries to target different devices even more accurately.
* Use a third party library for stiling, such as **Bootstrap** or **MaterialUI** in case of desiring even fresher UI, or simply add more CSS.
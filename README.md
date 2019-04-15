# ngTemplateOutlet vs ngConent
  
*Content projection* is a way to import HTML content from outside the component and insert that content into the component's template in a designated spot.

The **problem** is that 'nested' components are **immediately initialized and not destroyed** when removed from DOM.
This can cause unexpected overhead, if the code for initialize the nested component is heavy.
  
This is by design. The lifecycle of a component is always tied to the place where the component was declared, not to the place where the <ng-content> is used.

In this case, you should use ***ngTemplateOutlet**

Check the different implementation of *ContentComponent* (using **ng-content**) and *PowerContent* (using ***ngTemplateOutlet**).
Toggling the content, you'll see differente initialization date (check the console too).
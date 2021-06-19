# Airport Challenge


```
        ______
        _\____\___
=  = ==(____MA____)
          \_____\___________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```
## Introduction

In order to gain more practice writing Javascript, i revisited this exercise which was originally completed in Ruby [here](https://github.com/ArifEbrahim/airport_challenge).

This allowed to be implement TDD, debugging, mocks/doubles & dependancy injection in another language. All 6 user user stories were completed.

## How to use

#### To set up the project

Clone this repo to your computer and then open "index.html" in your web browser.

#### To create an airport

Open the developer console in your browser. Instantiate an airport by calling `new Airport();` . The airport class and allows instances of the Plane class to land or take off.

```
let jfk = new Airport();
```

#### To create a plane

Open the developer console in your browser. Instantiate a plane by calling `new Plane();` . The plane class can be told to land and take off from airports.

```
let b747 = new Plane();
```

#### Plane methods

A plane can be instructed to land at an airport with the following method:

```
b747.land(jfk);
```

Similarly, planes can be instructed to take off with the following method:

```
b747.takeOff();
```

There is randomly generated weather and if it's stormy weather then planes will not be allowed to land or take off. An error message is generated in the console in both cases.

#### Testing

Testing was completed in Jasmine and all tests are passing. To view the tests, open the file "SpecRunner.html" in your web browser. A screenshot is included below.

(./images/tests.png)

## User stories implemented

The following user stories were implemented as part of this project:

```
As an air traffic controller 
So I can get passengers to a destination 
I want to instruct a plane to land at an airport and confirm that it has landed

As an air traffic controller 
So I can get passengers on the way to their destination 
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller 
To ensure safety 
I want to prevent landing when the airport is full 

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller 
To ensure safety 
I want to prevent takeoff when weather is stormy 

As an air traffic controller 
To ensure safety 
I want to prevent landing when weather is stormy 
```

## Future work

The following edge cases have been solved:
- planes that are in the air cannot take off again

The following edge cases still need to be worked on:
- planes can only take off from airports they are in
- planes that are landed cannot land again and must be in an airport

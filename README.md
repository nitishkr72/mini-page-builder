# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Used React, ContextAPI, TailwindCSS, Javascript

[Deployed on Netlify](https://6584249330feeee64b925ce3--vermillion-hotteok-e37c0c.netlify.app/)

## How to run code

In the project directory, you can run using npm :
`npm run start`

## Understanding implementation

- block : Label, Input or Button that can be dragged

- Each block is a object containing fields `id, title, X, Y, fontSize, fontWeight`

- `id` here is randlomly generated `(funciton defined in src/Utils/static.res)` for each block

React Context is used here for global data management, in context we are storing object as

```
{
    currDragTitle       # This is string and contain title of the block
                        that is currently being dragged from SideBar

    currDragBlock       # This is string and contain ID of the block that
                        is currently being dragged inside the drop region
                        defined by DropOverCanvas component. Used only
                        when you are dragging already created block,

    blocks:             array of block object defined above,

}

```

### Components structure

```
-App
    - DropOverCanvas            # blocks can be dragged into this region

        Used Compoents
        - DrawElementOnCanvas   # handle view for each block

            Used Components
            - Modal             # Cutom component to handle form that can edit block Object
            - BlockView         # A stateless component that contains UI for each block

    - SideToolbar               # contain blocks, buttons to clear and export data

        Used Components
        - DraggableButtons      # Custom component button that can be dragged
        - button                # native button to add functionality like export and clear
```

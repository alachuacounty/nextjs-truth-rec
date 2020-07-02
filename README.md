# Truth and Reconciliation Rebuilt in Next.js
This project is rebuilt on a Javascript Framework known as Next.js. Next.js was chosen over React because routing between multiple pages is significantly easier. 


## Resources Needed
* Github Account (If making contributions to code)
* Github Desktop
* Node installed
* Basic knowledge in Github, React Component Model, Next.js, JSX constraints


## How to run this project for the first time
1. **Clone** project from github via website or github desktop application
2. open terminal and **cd** into **next-truth-rec** folder
3. run **npm install** to get latest packages/build
4. run **npm run dev** to see the developer build

**Note** 
* A common error found was *error lifecyle* which means you must **change directory (cd)** into the **next-truth-rec** folder then you can run the project


# Workflow
## File/Folder structure
* Found inside pages folder are individual pages with their respective markup and styles
* Files are created as .jsx files to take full advantage of JSX features
* Global Components are located within the **components** folder

## Styling within this project
* Css in js was used to style components/elements throughout this project. Read more here: (https://nextjs.org/blog/styling-next-with-styled-jsx)
* Find styles for each component and page within their directories named as {pagename}-styles.js
* To use external styles follow this pattern below in your {pagename}-styles.js file
```jsx
import css from 'styled-jsx/css'

export default css `

h2{
    font-size: 3rem;
}

`
```

## How layout component was used in this project
* A custom "Layout" component was built that combines the common components of every page (Navigation, Modal, Footer) and their styles.
* To build a page simply import the Layout component and wrap page content within Layout tags
```jsx
    import Layout from {/* path to /components/Layout*/};

    class Page extends React.Component{
        render(){
            return(
                <Layout>
                    {/* Insert page content here */}
                </Layout>
            );
        }
    }
    export default Page;
```

## Key terminal commands
* npm install - Gets latest packages, assets for project
* npm update - Updates existing packages/assets for project
* npm run dev - Runs a live dev version of the project
* cd - Allows you to change directory into the project


## Dependencies used in this project (Can be found in package.json file)
* **Bootstrap** (https://www.npmjs.com/package/bootstrap)
* **Express** (https://www.npmjs.com/package/express)
* **express-validator** (https://www.npmjs.com/package/express-validator)
* **React Flickity Component** (https://www.npmjs.com/package/react-flickity-component)
* **Jquery** (https://www.npmjs.com/package/jquery)
* **Next.js** (https://www.npmjs.com/package/jquery)
* **Nodemailer** (https://www.npmjs.com/package/nodemailer)

## Takeaways/Things learned from this project
* React is more for single page applications while Next is made with multi page applications in mind.
* A common error found was *error lifecyle* which means you must **change directory (cd)** a layer deeper before running project 
* Using **Layout Component** to link global styles/components was great for modularizing code.
* When using plugins such as Flickity, make sure to check if there is a React Component package that is optimized for React/Next project.
















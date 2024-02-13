This is a Next.js project with Typescript to show product list and statistics, mostly used server side components. 

State management like Redux is not used for a small app like this to prevent bundle size and build time increase.

Used PrimeReact, ChartJS componentes for a better visuals.

Used Jest for unit testing.

App has an api folder which returns data to client side and handles api requests.

App has 2 pages, one is Product List ,and another is Statistics.

On Product List page, you can see size filter, sort by price and list of products as seen on screenshot below,
![image](https://github.com/muratmelih/fashion-digital-excercise/assets/8982629/09c5cad4-8d22-4364-a1e2-70387ae71dc5)


Tired to divide each part as components to keep single responsibility principle.

On statistics page, you can see the 3 different statistics as a chart, used chart to provide better visuals and better data understanding
![image](https://github.com/muratmelih/fashion-digital-excercise/assets/8982629/3d43e283-6b8b-45df-8094-729d6c655ca5)


Tried to make responsiveness without a ui framework or library, just pure css.

![image](https://github.com/muratmelih/fashion-digital-excercise/assets/8982629/af5f9986-3fe5-493d-8e06-fa4e923e2075)


Added unit tests to the project, there are 2 unit tests that check the components render correctly.
You can run  the tests with the command 
```bash
npm run test
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

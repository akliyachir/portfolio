import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import RootLayout from './page/RootLayout/RootLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route path='https://my-article-online.netlify.com/'></Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

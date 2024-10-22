Created a React component named FetchData responsible for rendering fetched data onto the user interface. It uses the UseFetch custom hook to retrieve data from an API endpoint specified by a URL.

The custom React hook named UseFetch encapsulates the logic for fetching data from a specified URL. This hook uses useState and useEffect to manage the data fetching process, ensuring that data is retrieved asynchronously and stored in the component's state.

Learned to implement the map method through the fetched data array that renders each item onto the UI using JSX. It displays various attributes of each data item, such as name, importance, benefits, and the best time to intake, within styled list items.

By separating the data fetching logic into a custom hook (UseFetch), I have adopted a modular and reusable approach. This approach allows components throughout the application to easily fetch data from different API endpoints by simply providing the desired URL as an argument to the UseFetch hook, promoting code efficiency and maintainability.

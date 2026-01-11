
const ThemeContext = createContext();

export default function Context() {
  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <Home />
      </ThemeContext.Provider>
    );
  }
  
  function Home() {
    const theme = useContext(ThemeContext);
    return <div>{theme}</div>;
  }  
}

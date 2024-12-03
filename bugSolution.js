```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    console.log('Effect running');
    return () => {
      console.log('Cleanup function running');
    };
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleUnmount = () => {
    setIsMounted(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleUnmount}>Unmount</button>
    </div>
  );
}
```
import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import Scroll from "../components/Scroll";
import styles from "./Experiences.module.css";

function Experiences() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    // Listen to the scroll event and update scrollHeight based on the scroll position
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;

      // Calculate the maximum scroll height to keep the vertical bar at the bottom
      const maxScrollHeight = documentHeight - windowHeight;

      // Ensure scrollHeight doesn't exceed maxScrollHeight
      setScrollHeight(Math.min(maxScrollHeight, scrollTop));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <PageNav />
      <h1>Experiences</h1>
      <div className={styles.containerExp}>
        <div
          className={styles.horizontal}
          style={{ height: `${scrollHeight + 400}px` }}
        ></div>

        <Scroll position={styles.left}>
          <h3>jobtitle</h3>
          <h5>date</h5>
          <p>
            <em>location</em>
          </p>
          React implementation of the Intersection Observer API to tell you when
          an element enters or leaves the viewport. Contains both a Hooks,
          render props and plain children implementation.React implementation of
          the Intersection Observer API to tell you when an element enters or
          leaves the viewport. Contains both a Hooks, render props and plain
          children implementation.
        </Scroll>
        <Scroll position={styles.right}>
          React implementation of the Intersection Observer API to tell you when
          an element enters or leaves the viewport. Contains both a Hooks,
          render props and plain children implementation.React implementation of
          the Intersection Observer API to tell you when an element enters or
          leaves the viewport. Contains both a Hooks, render props and plain
          children implementation.
        </Scroll>
        <Scroll position={styles.left}>
          React implementation of the Intersection Observer API to tell you when
          an element enters or leaves the viewport. Contains both a Hooks,
          render props and plain children implementation.React implementation of
          the Intersection Observer API to tell you when an element enters or
          leaves the viewport. Contains both a Hooks, render props and plain
          children implementation.
        </Scroll>
        <Scroll position={styles.right}>
          React implementation of the Intersection Observer API to tell you when
          an element enters or leaves the viewport. Contains both a Hooks,
          render props and plain children implementation.React implementation of
          the Intersection Observer API to tell you when an element enters or
          leaves the viewport. Contains both a Hooks, render props and plain
          children implementation.
        </Scroll>
        <Scroll>
          React implementation of the Intersection Observer API to tell you when
          an element enters or leaves the viewport. Contains both a Hooks,
          render props and plain children implementation.React implementation of
          the Intersection Observer API to tell you when an element enters or
          leaves the viewport. Contains both a Hooks, render props and plain
          children implementation.
        </Scroll>
        <Scroll>
          React implementation of the Intersection Observer API to tell you when
          an element enters or leaves the viewport. Contains both a Hooks,
          render props and plain children implementation.React implementation of
          the Intersection Observer API to tell you when an element enters or
          leaves the viewport. Contains both a Hooks, render props and plain
          children implementation.
        </Scroll>
        <Scroll>
          React implementation of the Intersection Observer API to tell you when
          an element enters or leaves the viewport. Contains both a Hooks,
          render props and plain children implementation.React implementation of
          the Intersection Observer API to tell you when an element enters or
          leaves the viewport. Contains both a Hooks, render props and plain
          children implementation.
        </Scroll>
        <Scroll>
          React implementation of the Intersection Observer API to tell you when
          an element enters or leaves the viewport. Contains both a Hooks,
          render props and plain children implementation.React implementation of
          the Intersection Observer API to tell you when an element enters or
          leaves the viewport. Contains both a Hooks, render props and plain
          children implementation.
        </Scroll>
      </div>
    </>
  );
}

export default Experiences;

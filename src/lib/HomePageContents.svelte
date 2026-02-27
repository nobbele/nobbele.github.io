<script>
  import { differenceInYears, format } from "date-fns";
  import ArraySection from "./components/ArraySection.svelte";
  import IndentSection from "./components/IndentSection.svelte";
  import MultiSection from "./components/MultiSection.svelte";
  import MultiStrSection from "./components/MultiStrSection.svelte";
  import Section from "./components/Section.svelte";
  import SingleStrSection from "./components/SingleStrSection.svelte";

  const bday = new Date("June 12, 2003");
  const hrtStart = new Date("January 9, 2026");

  const age = differenceInYears(new Date(), bday);

  const getCurrentTime = () =>
    new Date().toLocaleTimeString("sv-SE", {
      timeZone: "Europe/Stockholm",
    });

  let currentTime = $state(getCurrentTime());

  $effect(() => {
    const timer = setInterval(() => {
      currentTime = getCurrentTime();
    }, 250);

    return () => clearInterval(timer);
  });
</script>

<div class="code">
  <span class="code-text">
    {"{ pkgs = import <nixpkgs>, people, ... }:"}
  </span>
  <span class="code-text"> {"pkgs.mkPeopleDerivation {"} </span>
  <IndentSection>
    <SingleStrSection key="username">nobbele</SingleStrSection>
    <SingleStrSection key="name" align={4}>Alice</SingleStrSection>
    <SingleStrSection key="pronouns" align={0}>she/they</SingleStrSection>

    <span class="code-text">&nbsp;</span>

    <SingleStrSection key="country" align={1}>Sweden</SingleStrSection>
    <Section key="time" align={4}>{currentTime}</Section>

    <span class="code-text">&nbsp;</span>

    <MultiStrSection key="about">
      <p>{age}-year-old girl who likes computers!</p>
    </MultiStrSection>

    <!-- TODO section about occupation (job/studies) -->

    <span class="code-text">&nbsp;</span>

    <MultiSection key="relationships" withVar="people">
      <span class="comment"># I love my wife {"<3"}</span>
      <Section key="partner"><a href="/" target="_blank">emily</a></Section>
      <span class="code-text">&nbsp;</span>
      <ArraySection key="friends">
        <a href="/" target="_blank">vernonlim</a>
        <a href="https://www.ardarmutcu.com/" target="_blank">arda</a>
      </ArraySection>
    </MultiSection>

    <span class="code-text">&nbsp;</span>

    <span class="comment"># Fuck the Swedish trans healthcare queue</span>
    <span class="comment"
      ># Thanks to Imago for making it available privately!</span
    >
    <Section key="hrtStart">{format(hrtStart, "MMMM do yyyy")}</Section>
  </IndentSection>
  <span class="code-text"> {"}"} </span>
</div>

<style>
  .code {
    display: flex;
    flex-direction: column;
  }

  .code-text {
    color: var(--text-code);
    text-wrap-mode: wrap;
  }

  .comment {
    color: var(--text-comment);
    text-wrap-mode: wrap;
  }
</style>

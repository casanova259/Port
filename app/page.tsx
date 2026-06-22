import { About } from "@/components/About";
import { Activity } from "@/components/Activity";
import { Certifications } from "@/components/Certifications";
import { Connect } from "@/components/Connect";
import { Divider } from "@/components/Divider";
import { Education } from "@/components/Education";
import { Header } from "@/components/Header";
import { Structure } from "@/components/Preloader/Structure";
import { Projects } from "@/components/Projects";
import { Quote } from "@/components/Quote";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-md px-2 py-6 sm:px-4">
      <Structure />
      <Header />
      <Divider />
      <About />
      <Divider />
      <Connect />
      <Divider />
      <Activity />
      <Divider />
      <Projects />
      <Divider />
      <Education />
      <Divider />
      <Certifications />
      <Quote />
    </main>
  );
}

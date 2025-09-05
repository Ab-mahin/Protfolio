import { Achievement } from "./canvas";
import {achievementCards} from '../constants/documents'

const Achievements = () => {
  return (
    <section className="relative c-space section-spacing w-full">
      <h2 className="text-heading text-center">My Achievements</h2>
      <div className="flex items-center justify-center h-screen"><Achievement cards={achievementCards} /></div>
    </section>
  );
};

export default Achievements;

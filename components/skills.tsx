import SkillsCard from "./skills-card";
import { skills } from "./constants";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="max-w-3xl mx-auto text-center text-athenix-dark-green">
              <h2 className="h1 mb-12">
                Streamline Your Startup: Hire Affordable, Reliable Developers
                with Ease
              </h2>
            </div>

            <p className="text-xl text-gray-400">
              The majority of new startups are looking to quickly onboard
              inexpensive reliable developers without the hassle of having to
              hire and manage.
            </p>
          </div>

          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {skills.map((skill) => {
              return (
                <SkillsCard
                  icon={skill.skillIcon}
                  title={skill.skillTitle}
                  details={skill.skillDetail}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

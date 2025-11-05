import { basehub } from "basehub";
import { infoFragment, projectsItemFragment } from "@/lib/basehub";
import { SocialLinks } from "@/components/social-links";
import { ProjectItem } from "@/components/project-item";
import "@/basehub.config";
import { CustomCursor } from "@/components/CustomCursor";
import { applyInfoOverrides } from "@/lib/info-overrides";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

export const dynamic = "force-static";
export const revalidate = 30;

export default async function Home() {
  const { info, projects } = await basehub().query({
    info: infoFragment,
    projects: {
      items: projectsItemFragment,
    },
  });

  const overriddenInfo = applyInfoOverrides(info);

  return (
    <main className="px-sides mb-24">
      {/* hero section */}

      <div className="pt-24 lg:pt-48 flex flex-col lg:grid grid-cols-12 gap-gap">
        <RevealOnScroll direction="right" delay={0} className="max-lg:hidden col-span-5">
          <SocialLinks
            className=""
            links={overriddenInfo.socialLinks.items}
          />
        </RevealOnScroll>
        <RevealOnScroll direction="left" delay={100} className="col-span-7">
          <h1 className="text-heading font-black uppercase text-balance">
            {overriddenInfo.heading}
          </h1>
        </RevealOnScroll>
      </div>

      {/* showcase section */}
      {projects.items.length > 0 && (
        <section className="pt-24">
          {/* featured project */}
          <RevealOnScroll direction="up" delay={200}>
            <div className="mb-12">
              <ProjectItem project={projects.items[0]} mode="featured" />
            </div>
          </RevealOnScroll>

          {/* grid projects */}
          {projects.items.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gap">
              {projects.items.slice(1).map((project, index) => (
                <RevealOnScroll key={project._slug} direction="up" delay={300 + index * 100}>
                  <ProjectItem project={project} mode="grid" />
                </RevealOnScroll>
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  );
}

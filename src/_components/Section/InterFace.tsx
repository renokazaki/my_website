import { HomeInterface ,SkillInterface, ProjectInterface, ContactInterface} from "./index";

  

export default function Interface() {


    return (
      <div className="w-screen flex flex-col items-center">
        <div className="max-w-[1200px] w-full">
          {/* HOME */}
          <HomeInterface/>
          {/* SKILLS */}
            <SkillInterface/>
          {/* PROJECTS */}
          <ProjectInterface />
          {/* CONTACT */}
          <ContactInterface/>
        </div>
      </div>
    );
  };
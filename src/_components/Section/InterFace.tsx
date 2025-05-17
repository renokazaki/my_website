import { HomeInterface ,SkillInterface, ProjectInterface, ContactInterface} from "./index";

  

export default function Interface() {


    return (
      <div className="interface">
        <div className="sections">
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
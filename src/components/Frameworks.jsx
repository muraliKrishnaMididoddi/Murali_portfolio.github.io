// import { OrbitingCircles } from "./OrbitingCircles";

// export function Frameworks() {
//   const skills = [
//     "auth0",
//     "blazor",
//     "cplusplus",
//     "csharp",
//     "css3",
//     "dotnet",
//     "dotnetcore",
//     "git",
//     "html5",
//     "javascript",
//     "microsoft",
//     "react",
//     "sqlite",
//     "tailwindcss",
//     "vitejs",
//     "wordpress",
//   ];
//   return (
//     <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
//       <OrbitingCircles iconSize={40}>
//         {skills.map((skill, index) => (
//           <Icon key={index} src={`assets/logos/${skill}.svg`} />
//         ))}
//       </OrbitingCircles>
//       <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
//         {skills.reverse().map((skill, index) => (
//           <Icon key={index} src={`assets/logos/${skill}.svg`} />
//         ))}
//       </OrbitingCircles>
//     </div>
//   );
// }

// const Icon = ({ src }) => (
//   <img src={src} className="duration-200 rounded-sm hover:scale-110" />
// );

import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    
    "azure-original-wordmark",
    "azure",
    "bash-plain",
    "bitbucket-original-wordmark",  
    "bootstrap-original-wordmark",
    "cplusplus",
    "csharp-pink",
    "csharp",
    "css3",
    "django-plain-wordmark",
    "docker-original-wordmark",
    "eclipse-original-wordmark",
    "fastapi-original-wordmark",
    "git-original-wordmark",
    "git",
    "github",
    "graphql-plain-wordmark",
    "hadoop-original-wordmark",
    "html5",
    "java-original-wordmark",
    "javascript",
    "jira-original-wordmark",
    "keras-original-wordmark",
    "matplotlib-original-wordmark",
    "microsoft",
    "microsoftsqlserver",
    "mongodb-original-wordmark",
    "react",
    "sqlite",
    "tailwindcss",
    "visualstudiocode",
    "vitejs",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);


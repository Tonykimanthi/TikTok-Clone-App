import { useState } from "react";
import { HiPlusSm } from "react-icons/hi";

const ShareUserPanel = () => {
  const [users, setUsers] = useState([
    {
      imgURL:
        "https://images.unsplash.com/photo-1630208232589-e42b29428b19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Jacob Joosep tony",
    },
    {
      imgURL:
        "https://plus.unsplash.com/premium_photo-1675034372421-91ab1a16c982?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Isabel Aisha",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1590031905406-f18a426d772d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Ramadevi",
    },

    {
      imgURL:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Nikita Tomaso",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1576568701508-cca94c66487b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFmcmlrYW4lMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Shaniya Lolana",
    },
    {
      imgURL:
        "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.webp?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
      name: "Wekesa Abdul",
    },
  ]);

  return (
    <div className="py-2 pr-4 flex gap-x-4 overflow-x-auto scrollbar-hide">
      <article className="ml-4">
        <div className="w-12 h-12 rounded-full relative">
          <img
            className="w-full h-full rounded-full object-cover cursor-pointer"
            src="https://media.istockphoto.com/id/1500238408/photo/program-code-development-icon-on-a-digital-lcd-display-with-reflection.webp?b=1&s=170667a&w=0&k=20&c=CfaVabgMcwwc-ijzVAxNs_Sz6q3JVPJnlQ-Py-dpuAQ="
            alt="Acc user"
          />
          <button className="text-white border-2 border-white p-px absolute -bottom-0.5 -right-1.5 rounded-full bg-teal-500">
            <HiPlusSm />
          </button>
          <p className="text-xs text-center leading-3 mt-1">
            Add to Story
          </p>
        </div>
      </article>
      <ul className="flex gap-x-4">
        {users.map((user, index) => (
          <li key={index} className="w-12">
            <img
              className="w-12 h-12 min-w-[3rem] rounded-full object-cover cursor-pointer"
              src={user.imgURL}
              alt="Acc user"
            />
            <p className="text-xs text-center leading-3 mt-1 break-words">{user.name.length > 12? user.name.slice(0, 12) + '...' : user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShareUserPanel;

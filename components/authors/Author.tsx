import Image from "next/image";

import { AuthorFragmentMDX } from "../../props";
import { MDXComponent } from "../NextMdx";

interface AuthorProps {
  author: AuthorFragmentMDX;
}

export const Author = ({ author }: AuthorProps) => {
  return (
    <div className="prose lg:prose-lg">
      <h2 className="mt-2 mb-8 leading-9 font-extrabold sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-none">
        {author.name}
      </h2>

      <div className="flex justify-center">
        <Image
          src="/neander.png"
          width={300}
          height={300}
          alt="Zdjęcie Jakuba"
        />
        {/* @todo image */}
      </div>

      <hr className="my-6" />

      <div className="prose-lg">
        {author.bio && <MDXComponent {...author.bio} />}
      </div>

      {/* @todo */}
      <ul>
        {author.socialMedias.map((sm) => {
          const { className, label } = matchSm(sm);
          return (
            <a
              key={sm}
              className="bg-white text-blue-400 text-2xl font-normal focus:outline-none mr-2"
              href={sm}
            >
              <span className={className} aria-label={label} />
            </a>
          );
        })}
      </ul>
    </div>
  );
};

function matchSm(socialMedia: string) {
  if (socialMedia.startsWith("https://facebook.com/")) {
    return { className: "fab fa-facebook", label: "Facebook" };
  }
  if (socialMedia.startsWith("https://twitter.com/")) {
    return { className: "fab fa-twitter", label: "Twitter" };
  }
  if (socialMedia.startsWith("https://linkedin.com/")) {
    return { className: "fab fa-linkedin", label: "LinkedIn" };
  }
  if (socialMedia.startsWith("https://github.com/")) {
    return { className: "fab fa-github", label: "Github" };
  }
  return { className: "fas fa-link", label: "Link" };
}

import line from "/line_bg.svg";
import heroBanner from "/hero-banner.png";
import Yay3 from "/Yay3.png";
import { usePostBySlug } from "../../hooks/usePost";
import Loading from "../../components/Loading";

export default function LegalNotice() {
  const { data, isLoading, isError, error } = usePostBySlug("legal-notices");
  const post = data?.data?.[0];

  if (isLoading) return <Loading />;

  if (isError) {
    return <div className="container">Error: {error?.message}</div>;
  }
  
  return (
    <div>
      <div
        className="relative w-full h-16 md:h-20 lg:h-24 pt-10 md:pt-16 lg:pt-20 z-50"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="container">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="absolute w-auto -top-40 md:-top-48 lg:-top-52 left-10 md:left-16 lg:left-20 scale-[5] md:scale-[6.2] lg:scale-[7.4] origin-top-left rotate-[2.93deg] z-20 px-1.5"
          />
        </div>
        <div className="relative flex flex-col gap-3 md:gap-4 lg:gap-6 bg-[#E2F6F6] shadow rounded-2xl p-4 md:p-6 lg:p-8 mt-8 md:mt-16 lg:mt-20 mb-52 z-30">
          <div
            className="inline-flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="relative text-center text-xl md:text-2xl lg:text-5xl text-[#0A4A60] font-bold pt-2 md:pt-3 lg:pt-4">
              <span className="text-[#FCA13B]">LEGAL </span>
              NOTICE
              <img
                className="absolute -top-10 md:-top-12 lg:-top-16 -right-12 md:-right-16 lg:-right-20 w-6 md:w-8 lg:w-auto"
                src={Yay3}
                alt=""
              />
            </h2>
          </div>

          {post ? (
            <>
              <div
                className="flex flex-col gap-1 md:gap-1.5 lg:gap-2"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="inline-flex">
                  <p className="">
                    <span className="font-bold text-[#0F262E]">
                      Reference:{" "}
                    </span>
                    {post.title}
                  </p>
                </div>
                <div className="inline-flex">
                  <p className="">
                    <span className="font-bold text-[#0F262E]">
                      Last update:{" "}
                    </span>
                    {new Date(post.updatedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {post.content && post.content.length > 0 && (
                <div
                  className="flex flex-col gap-3 md:gap-4 lg:gap-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {post.content.map((block, idx) => (
                    <div key={idx}>
                      {block.children && block.children.length > 0 && (
                        <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
                          {block.children[0]?.bold ? (
                            <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0A4A60]">
                              {block.children[0]?.text}
                            </h3>
                          ) : (
                            <p className="text-xs md:text-sm lg:text-sm leading-relaxed text-[#0F262E]">
                              {block.children.map((child, childIdx) => (
                                <span key={childIdx}>
                                  {child.bold ? (
                                    <strong>{child.text}</strong>
                                  ) : (
                                    child.text
                                  )}
                                </span>
                              ))}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center text-[#0F262E]">No content found</div>
          )}
        </div>
      </div>
    </div>
  );
}

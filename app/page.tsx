import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_15%_10%,#f0d7f1_0%,#dba9df_32%,#b86cc8_66%,#6f2794_100%)] px-4 py-6 sm:px-6 sm:py-8">
      <main className="mx-auto flex w-full max-w-[1060px] items-center justify-center">
        <section className="w-full max-w-[390px] overflow-hidden rounded-[30px] bg-white shadow-[0_20px_45px_rgba(67,23,77,0.28)] sm:max-w-[460px] lg:max-w-[980px]">
          <div className="grid grid-cols-1 lg:min-h-[700px] lg:grid-cols-[42%_58%]">
            <div className="relative p-0">
              <div className="relative h-[210px] overflow-hidden rounded-none sm:h-[240px] lg:h-full lg:min-h-[620px] lg:rounded-l-[26px] lg:rounded-r-none">
                <Image
                  src="https://i.pinimg.com/736x/2f/3b/c2/2f3bc29b872651193596252eb704f870.jpg"
                  alt="Astronaut"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,26,45,0.26)_0%,rgba(26,16,46,0.2)_44%,rgba(42,16,56,0.28)_100%)]" />
                <p className="absolute left-4 top-4 text-[13px] font-semibold text-white lg:left-6 lg:top-6 lg:text-sm">Astro</p>
                <div className="absolute left-4 top-10 max-w-[250px] text-[22px] leading-[1.1] font-bold tracking-[-0.02em] text-white sm:text-[24px] lg:left-6 lg:top-20 lg:max-w-[290px] lg:text-[46px] lg:leading-[1.06]">
                  Exploring new frontiers, one step at a Time.
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center bg-white px-6 pb-5 pt-5 sm:px-8 sm:pb-7 sm:pt-5 lg:p-12">
              <p className="absolute right-4 top-3 text-right text-[10px] font-semibold text-[#3f2e54] sm:right-5 sm:top-3.5 sm:text-[11px] lg:right-6 lg:top-4 lg:text-[12px]">
                Already a member? Sign in ↑
              </p>
              <div className="w-full max-w-[460px]">
                <h1 className="mb-5 text-[36px] leading-none font-bold tracking-[-0.03em] text-[#1f1734] sm:mb-6 sm:text-[41px] lg:mb-9 lg:text-[48px]">
                  Create Account
                </h1>

                <div className="mb-4 grid grid-cols-2 gap-2 sm:gap-3 lg:mb-5">
                  <button
                    type="button"
                    className="flex h-9 items-center justify-center gap-1.5 rounded-full bg-[#5f39cb] px-2 text-[10px] font-semibold text-white sm:h-10 sm:gap-2 sm:text-[11px] lg:h-11 lg:text-[13px]"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
                      <path
                        fill="#EA4335"
                        d="M12 10.2v3.9h5.4c-.2 1.2-1.4 3.5-5.4 3.5-3.2 0-5.9-2.7-5.9-6s2.7-6 5.9-6c1.8 0 3 .8 3.7 1.5l2.5-2.4C16.6 3.2 14.5 2.2 12 2.2A9.8 9.8 0 0 0 2.2 12c0 5.4 4.4 9.8 9.8 9.8 5.6 0 9.3-3.9 9.3-9.4 0-.6 0-1.1-.1-1.6H12Z"
                      />
                      <path
                        fill="#34A853"
                        d="M2.2 7.9 5.4 10a6 6 0 0 1 6.6-4.4c1.8 0 3 .8 3.7 1.5l2.5-2.4A9.8 9.8 0 0 0 2.2 7.9Z"
                      />
                      <path
                        fill="#4A90E2"
                        d="M12 21.8c2.4 0 4.5-.8 6-2.3l-2.8-2.2c-.7.5-1.8 1-3.2 1a6 6 0 0 1-5.7-4.1l-3.1 2.4a9.8 9.8 0 0 0 8.8 5.2Z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M6.3 14.2a6.2 6.2 0 0 1 0-4l-3.1-2.4a9.8 9.8 0 0 0 0 8.8l3.1-2.4Z"
                      />
                    </svg>
                    Sign up with Google
                  </button>
                  <button
                    type="button"
                    className="flex h-9 items-center justify-center rounded-full bg-[#e5e0ee] px-2 text-[10px] font-semibold text-[#2f2442] sm:h-10 sm:text-[11px] lg:h-11 lg:text-[13px]"
                  >
                    <span className="inline-flex items-center justify-center gap-1.5 sm:gap-2">
                      <Image
                        src="https://logoeps.com/wp-content/uploads/2014/09/49354-facebook-logo-icon-vector-icon-vector-eps.png"
                        alt="Facebook"
                        width={14}
                        height={14}
                        className="h-[13px] w-[13px] sm:h-[15px] sm:w-[15px]"
                      />
                      <span>with Facebook</span>
                    </span>
                  </button>
                </div>

                <div className="mb-4 flex items-center gap-2.5 sm:gap-3 lg:mb-5">
                  <span className="h-px flex-1 bg-[#ddd7e5]" />
                  <p className="text-[9px] text-[#807591] sm:text-[10px] lg:text-[11px]">or use your email address</p>
                  <span className="h-px flex-1 bg-[#ddd7e5]" />
                </div>

                <form className="space-y-3 sm:space-y-3.5 lg:space-y-4.5">
                  <div>
                    <label className="mb-1 block text-[11px] font-semibold text-[#4c3f63] lg:mb-1.5 lg:text-[13px]">Name</label>
                    <input
                      type="text"
                      className="h-9 w-full rounded-full bg-[#ece8f1] px-3.5 text-xs outline-none sm:h-10 sm:text-sm lg:h-12 lg:px-4 lg:text-[15px]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold text-[#4c3f63] lg:mb-1.5 lg:text-[13px]">Email or Phone no.</label>
                    <input
                      type="text"
                      className="h-9 w-full rounded-full bg-[#ece8f1] px-3.5 text-xs outline-none sm:h-10 sm:text-sm lg:h-12 lg:px-4 lg:text-[15px]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold text-[#4c3f63] lg:mb-1.5 lg:text-[13px]">Username</label>
                    <input
                      type="text"
                      className="h-9 w-full rounded-full bg-[#ece8f1] px-3.5 text-xs outline-none sm:h-10 sm:text-sm lg:h-12 lg:px-4 lg:text-[15px]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold text-[#4c3f63] lg:mb-1.5 lg:text-[13px]">Password</label>
                    <input
                      type="password"
                      className="h-9 w-full rounded-full bg-[#ece8f1] px-3.5 text-xs outline-none sm:h-10 sm:text-sm lg:h-12 lg:px-4 lg:text-[15px]"
                    />
                  </div>

                  <label className="mt-1.5 flex items-center gap-1.5 text-[9px] text-[#786b8b] sm:gap-2 sm:text-[10px] lg:mt-2 lg:text-[11px]">
                    <input type="checkbox" className="h-3 w-3 rounded border-[#c7bdd8] lg:h-3.5 lg:w-3.5" />I agree to all terms and Privacy Policy
                  </label>

                  <button
                    type="submit"
                    className="mt-0.5 h-9 w-full rounded-full bg-[#17002f] text-[15px] font-semibold text-white sm:h-10 sm:text-[16px] lg:mt-1 lg:h-12 lg:text-[24px]"
                  >
                    Sign up
                  </button>

                  <p className="pt-0.5 text-center text-[9px] text-[#7e748f] sm:text-[10px] lg:pt-1 lg:text-[11px]">
                    Already have an account? <a href="#" className="font-semibold text-[#3c2b54]">Log in</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

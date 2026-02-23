import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_15%_10%,#efe8ef_0%,#e7dae8_30%,#cb9ab8_65%,#8d4c84_100%)] px-4 py-6 sm:px-6 sm:py-8">
      <main className="mx-auto flex w-full max-w-[980px] items-center justify-center">
        <section className="w-full max-w-[360px] overflow-hidden rounded-[30px] bg-[#f7f4fa] shadow-[0_20px_45px_rgba(67,23,77,0.28)] sm:max-w-[420px] lg:max-w-[900px]">
          <div className="grid grid-cols-1 lg:min-h-[640px] lg:grid-cols-[42%_58%]">
            <div className="relative p-2.5 sm:p-4 lg:p-7">
              <div className="relative h-[190px] overflow-hidden rounded-[24px] sm:h-[215px] lg:h-full lg:min-h-[560px] lg:rounded-[26px]">
                <Image
                  src="https://i.pinimg.com/736x/2f/3b/c2/2f3bc29b872651193596252eb704f870.jpg"
                  alt="Astronaut"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,26,45,0.26)_0%,rgba(26,16,46,0.2)_44%,rgba(42,16,56,0.28)_100%)]" />
                <p className="absolute left-4 top-4 text-[13px] font-semibold text-white lg:left-6 lg:top-6 lg:text-sm">Astro</p>
                <div className="absolute left-4 top-10 max-w-[230px] text-[20px] leading-[1.1] font-bold tracking-[-0.02em] text-white sm:text-[22px] lg:left-6 lg:top-20 lg:max-w-[260px] lg:text-[41px] lg:leading-[1.06]">
                  Exploring new frontiers, one step at a Time.
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center px-5 pb-6 pt-2 sm:px-7 sm:pb-8 sm:pt-3 lg:p-10">
              <div className="w-full max-w-[420px]">
                <h1 className="mb-4 text-[34px] leading-none font-bold tracking-[-0.03em] text-[#1f1734] sm:mb-5 sm:text-[38px] lg:mb-8 lg:text-[44px]">
                  Create Account
                </h1>

                <div className="mb-4 grid grid-cols-2 gap-2 sm:gap-3 lg:mb-5">
                  <button
                    type="button"
                    className="h-8 rounded-full bg-[#5f39cb] px-2 text-[9px] font-semibold text-white sm:h-9 sm:text-[10px] lg:h-10 lg:text-[12px]"
                  >
                    ● Sign up with Google
                  </button>
                  <button
                    type="button"
                    className="h-8 rounded-full bg-[#e5e0ee] px-2 text-[9px] font-semibold text-[#2f2442] sm:h-9 sm:text-[10px] lg:h-10 lg:text-[12px]"
                  >
                    ● via Facebook
                  </button>
                </div>

                <div className="mb-4 flex items-center gap-2.5 sm:gap-3 lg:mb-5">
                  <span className="h-px flex-1 bg-[#ddd7e5]" />
                  <p className="text-[9px] text-[#807591] sm:text-[10px] lg:text-[11px]">or use your email address</p>
                  <span className="h-px flex-1 bg-[#ddd7e5]" />
                </div>

                <form className="space-y-2.5 sm:space-y-3 lg:space-y-4">
                  <div>
                    <label className="mb-1 block text-[10px] font-semibold text-[#4c3f63] lg:mb-1.5 lg:text-[12px]">Name</label>
                    <input
                      type="text"
                      className="h-8 w-full rounded-full bg-[#ece8f1] px-3 text-[11px] outline-none sm:h-9 sm:text-xs lg:h-11 lg:px-4 lg:text-sm"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] font-semibold text-[#4c3f63] lg:mb-1.5 lg:text-[12px]">Email or Phone no.</label>
                    <input
                      type="text"
                      className="h-8 w-full rounded-full bg-[#ece8f1] px-3 text-[11px] outline-none sm:h-9 sm:text-xs lg:h-11 lg:px-4 lg:text-sm"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] font-semibold text-[#4c3f63] lg:mb-1.5 lg:text-[12px]">Username</label>
                    <input
                      type="text"
                      className="h-8 w-full rounded-full bg-[#ece8f1] px-3 text-[11px] outline-none sm:h-9 sm:text-xs lg:h-11 lg:px-4 lg:text-sm"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] font-semibold text-[#4c3f63] lg:mb-1.5 lg:text-[12px]">Password</label>
                    <input
                      type="password"
                      className="h-8 w-full rounded-full bg-[#ece8f1] px-3 text-[11px] outline-none sm:h-9 sm:text-xs lg:h-11 lg:px-4 lg:text-sm"
                    />
                  </div>

                  <label className="mt-1.5 flex items-center gap-1.5 text-[9px] text-[#786b8b] sm:gap-2 sm:text-[10px] lg:mt-2 lg:text-[11px]">
                    <input type="checkbox" className="h-3 w-3 rounded border-[#c7bdd8] lg:h-3.5 lg:w-3.5" />I agree to all terms and Privacy Policy
                  </label>

                  <button
                    type="submit"
                    className="mt-0.5 h-8 w-full rounded-full bg-[#17002f] text-[14px] font-semibold text-white sm:h-9 sm:text-[15px] lg:mt-1 lg:h-11 lg:text-[22px]"
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

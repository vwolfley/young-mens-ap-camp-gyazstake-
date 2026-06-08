import PackingList from "../../docs/Packing-List.pdf"


function PackingListSection() {
  return (
    <section className="body-font text-blue-950">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-340 px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative mx-auto grid max-w-4xl space-y-5 sm:space-y-10">
            <div className="text-center">
              <h2 className="text-foreground mb-4 text-xl font-bold sm:text-2xl lg:text-3xl lg:leading-tight">
                Camp Packing List
              </h2>
              <h3 className="text-2xl">Dress Standards</h3>
              <p className="mt-4">
                We trust you, young men, so we’re not going to spell out every nuance of dress. The
                standard and invitation have already been given in the “For Strength of Youth”,
                which comes from inspired prophets and apostles, who speak for the Lord Jesus
                Christ. Here is the standard to which you will be expected to abide by while at
                camp:
              </p>
              <blockquote className="border-default my-4 border-s-4 bg-gray-100">
                <p className="p-6 text-sm font-medium italic">
                  Treat your body—and others’ bodies— with respect. As you make decisions about your
                  clothing, hairstyle, and appearance, ask yourself, “Am I honoring my body as a
                  sacred gift from God?” Heavenly Father wants us to see each other for who we
                  really are: not just physical bodies but His beloved children with a divine
                  destiny. Avoid styles that emphasize or draw inappropriate attention to your
                  physical body, instead of who you are as a child of God with an eternal future.
                  Let moral cleanliness and love for God guide your choices.
                </p>
              </blockquote>

              <h3 className="text-xl mt-8 mb-6 font-bold">
                Each participant should bring the following minimal equipment to camp.
              </h3>

              <div className="mt-4 flex flex-col text-left">
                <p className="">
                  <strong>Cell Phones: </strong>Many youth have cell phones to take photographs or
                  to access their scriptures. Cell phones are allowed for these purposes only.
                  Leaders will hold cell phones for safekeeping if they detract from the camp
                  experience. The camp property does not have cellular service.
                </p>
                <p className="mt-4">
                  <strong>Tablets/Video Game Systems/Earbuds/Bluetooth Speakers/Etc.: </strong>All
                  electronic items besides cell phones are prohibited at camp and will be held by
                  leaders for safekeeping if they are brought to camp.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mx-auto max-w-2xl">
                <div>
                  <h4 className="text-lg font-bold mb-3">Clothing and Bedding</h4>
                  <ul className="space-y-1 text-sm md:text-base">
                    <li>❒ Sturdy closed-toe shoes</li>
                    <li>❒ Comfortable camp shoes</li>
                    <li>❒ Extra underwear and socks</li>
                    <li>❒ Shorts/blue jeans (3)</li>
                    <li>❒ Tee-Shirts (3)</li>
                    <li>❒ Raincoat/poncho</li>
                    <li>❒ Pajamas</li>
                    <li>❒ Sweatshirt/light jacket</li>
                    <li>❒ Tent</li>
                    <li>❒ Cot/Sleeping pad</li>
                    <li>❒ Sleeping bag</li>
                    <li>❒ Pillow</li>
                    <li>❒ Hat</li>
                    <li>❒ Duffel bag, backpack</li>
                    <li>❒ Camp Chair</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3">Personal Gear</h4>
                  <ul className="space-y-1 text-sm md:text-base">
                    <li>❒ Toothbrush and toothpaste</li>
                    <li>❒ Towel</li>
                    <li>❒ Soap</li>
                    <li>❒ Deodorant</li>
                    <li>❒ Comb/brush</li>
                    <li>❒ Flashlight/Headlamp</li>
                    <li>❒ Folding Pocket Knife</li>
                    <li>❒ Insect repellent</li>
                    <li>❒ Sunscreen</li>
                    <li>❒ Chapstick or Lip balm</li>
                    <li>❒ Prescribed medication (held by adult leaders)</li>
                    <li>❒ Personal first aid kit</li>
                    <li>❒ Work Gloves</li>
                    <li>❒ Sunglasses</li>
                    <li>❒ Water bottle (re-usable 1 liter)</li>
                    <li>❒ Pencil, pen, pad/notebook</li>
                    <li>❒ Scriptures</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 text-center">
                <a
                  href={PackingList}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent-green text-white text-lg font-bold py-4 px-8 border border-accent-green rounded shadow hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Download Packing List (PDF)
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PackingListSection

function DirectionsSection() {
  return (
    <section className="body-font text-blue-950">
      <div className="container mx-auto flex flex-col items-center px-5 py-16">
        <h1 className="title-font text-3xl font-medium sm:text-4xl text-center mb-8">
            Directions to Camp Heber
          </h1>

        <div className="w-full max-w-3xl space-y-4 text-left text-base leading-relaxed">
          <p>
            <strong>Camp Heber Address:</strong>
            <br />
            2805 South Meadow Rd,
            <br />
            Heber, AZ 85928
          </p>
          <p>
            Camp Heber is 61 scenic acres nestled in the midst of the Apache-Sitgreaves National
            Forest. While you will be sleeping in self-provided tents, the camp provides facilities
            for hot showers, flush toilets, lighted/covered porch with serving area, great warm-up
            kitchen and food storage area.
          </p>
          <p className="font-semibold">
            Please note that when Apache-Sitgreaves National Forest is closed, so is Camp Heber.
          </p>

          <div className="flex flex-col md:flex-row gap-5items-start mt-8">
            <div className="flex-1">
              <h2 className="text-lg font-bold mb-3">From Hwy. 260 heading east (from Payson)</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Just as you get into Heber, turn <strong>RIGHT</strong> on Buckskin Canyon Rd.</li>
                <li>Go 1.9 mi. As the road turns <strong>LEFT</strong>, it becomes Artists Draw Rd.</li>
                <li>Go 0.2 mi., crossing the wash, and take second <strong>RIGHT</strong> onto Meadow Rd.</li>
                <li>At .1 mile is a gate and Camp Heber is at .8 miles. (after another gate)</li>
              </ol>
            </div>
            <div className="flex-1 w-full">
              <iframe
                title="Camp Heber Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.0!2d-110.6573!3d34.3954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2805+South+Meadow+Rd%2C+Heber%2C+AZ+85928!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                className="w-full h-72 rounded-lg shadow-md border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DirectionsSection

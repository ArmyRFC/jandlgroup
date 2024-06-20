import { CircleBackground } from './CircleBackground'
import { Container } from './Container'
import { Button } from './Button'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get started with us today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            We are currently accepting new clients. Get in touch with us today to learn more about our services.
          </p>
          <div className="mt-8 flex justify-center">
            <Button as="a" href="mailto:bret@techbret.com" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

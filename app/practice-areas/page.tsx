import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Gavel, Scale, FileText, Home, Users, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "We provide comprehensive legal services across a wide range of probate and estate matters to meet your needs.",
  alternates: {
    canonical: "/practice-areas",
  },
  openGraph: {
    title: "Our Practice Areas | Heir Wise Probate",
    description:
      "We provide comprehensive legal services across a wide range of probate and estate matters to meet your needs.",
    url: "https://heirwise.com/practice-areas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heir Wise Probate Practice Areas",
      },
    ],
  },
}

export default function PracticeAreasPage() {
  return (
    <>
      <Navbar />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Practice Areas</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We provide comprehensive legal services across a wide range of probate and estate matters to meet your
              needs.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-amber-700 text-white p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Gavel className="h-16 w-16 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Probate Administration</h2>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-gray-700 mb-4">
                    Probate administration is the legal process of validating a will, paying debts, and distributing
                    assets after someone passes away. Our attorneys guide executors and administrators through every
                    step of this complex process.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Our Probate Administration Services Include:
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Filing the initial petition with the probate court</li>
                    <li>Notifying creditors and beneficiaries</li>
                    <li>Creating inventories of estate assets</li>
                    <li>Managing estate assets during probate</li>
                    <li>Preparing and filing estate tax returns</li>
                    <li>Distributing assets to beneficiaries</li>
                    <li>Providing final accountings to the court</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-amber-700 text-white p-6 flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="h-16 w-16 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Estate Planning</h2>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-gray-700 mb-4">
                    Estate planning involves creating legal documents and strategies to ensure your assets are protected
                    and distributed according to your wishes. Our comprehensive approach helps you create a plan that
                    provides for your loved ones and preserves your legacy.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Estate Planning Services Include:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Drafting wills and testamentary trusts</li>
                    <li>Creating revocable and irrevocable trusts</li>
                    <li>Establishing powers of attorney</li>
                    <li>Preparing healthcare directives</li>
                    <li>Developing tax minimization strategies</li>
                    <li>Business succession planning</li>
                    <li>Charitable giving strategies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-amber-700 text-white p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Briefcase className="h-16 w-16 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Trust Administration</h2>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-gray-700 mb-4">
                    Trust administration involves managing trust assets and distributing them according to the terms of
                    the trust document. Our attorneys help trustees fulfill their fiduciary duties and navigate the
                    complex legal and tax issues involved in trust administration.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Our Trust Administration Services Include:
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Guiding trustees through their legal responsibilities</li>
                    <li>Managing trust assets and investments</li>
                    <li>Preparing trust accountings</li>
                    <li>Handling trust tax filings</li>
                    <li>Communicating with beneficiaries</li>
                    <li>Distributing trust assets</li>
                    <li>Modifying or terminating trusts when appropriate</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-amber-700 text-white p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Scale className="h-16 w-16 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Will Contests</h2>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-gray-700 mb-4">
                    Will contests arise when there are disputes about the validity of a will or the interpretation of
                    its provisions. Our litigation team represents both challengers and defenders in these complex and
                    often emotionally charged proceedings.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Grounds for Contesting a Will Include:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Lack of testamentary capacity</li>
                    <li>Undue influence or coercion</li>
                    <li>Fraud or forgery</li>
                    <li>Improper execution</li>
                    <li>Existence of a more recent will</li>
                    <li>Ambiguous or unclear provisions</li>
                    <li>Breach of fiduciary duty by the executor</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-amber-700 text-white p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-16 w-16 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Guardianships & Conservatorships</h2>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-gray-700 mb-4">
                    Guardianships and conservatorships are legal arrangements that provide protection for individuals
                    who cannot care for themselves or manage their affairs. Our attorneys help families establish these
                    protective arrangements while preserving the dignity of the protected person.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Our Guardianship & Conservatorship Services Include:
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Petitioning for guardianship of minors</li>
                    <li>Establishing conservatorship for incapacitated adults</li>
                    <li>Representing proposed guardians/conservators</li>
                    <li>Advising on guardian/conservator responsibilities</li>
                    <li>Preparing annual reports and accountings</li>
                    <li>Modifying or terminating guardianships/conservatorships</li>
                    <li>Representing interested parties in contested proceedings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-amber-700 text-white p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Home className="h-16 w-16 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Estate & Trust Litigation</h2>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-gray-700 mb-4">
                    Estate and trust litigation involves resolving disputes that arise during the administration of
                    estates and trusts. Our litigation team combines probate expertise with strong advocacy skills to
                    protect our clients' interests in these complex matters.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Common Estate & Trust Disputes Include:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Breach of fiduciary duty claims</li>
                    <li>Trust interpretation disputes</li>
                    <li>Contested accountings</li>
                    <li>Removal of trustees or executors</li>
                    <li>Trust modification or termination</li>
                    <li>Disputes between beneficiaries</li>
                    <li>Claims of financial elder abuse</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

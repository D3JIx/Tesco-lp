'use client'

import { useState } from 'react'
import { ChevronUp } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
  const [openFaq, setOpenFaq] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-center border-b border-gray-200 py-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/635e45f11e7357761ef8a9a7c46ae899-RWfQIMDYmTEHHryNIDV4VlD5Zk4lNi.jpg"
          alt="Tesco Logo"
          width={200}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl space-y-8">
          {/* Title Section */}
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold text-black">
              Complete Your Registration
            </h1>
            <p className="text-lg text-gray-600">
              Follow these simple steps to claim your credit
            </p>
          </div>

          {/* How to Claim Section */}
          <div className="space-y-6">
            <h2 className="text-center text-2xl font-bold text-black">
              HOW TO CLAIM
            </h2>

            {/* Steps */}
            <div className="space-y-4">
              {[
                { number: 1, text: 'Click the Button Below' },
                { number: 2, text: 'Enter Your Basic Info' },
                { number: 3, text: 'Complete 5-8 deals' },
                { number: 4, text: 'Claim up to £500 Tesco Credit' },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white font-bold">
                    {step.number}
                  </div>
                  <p className="text-lg text-gray-800">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <a
              href="https://giftclick.org/aff_c?offer_id=1179&aff_id=175103"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-black px-8 py-4 text-center text-xl font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            >
              Claim Your Reward
            </a>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6 pt-8">
            <h2 className="text-center text-2xl font-bold text-black">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            {/* FAQ Item */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(!openFaq)}
                className="flex w-full items-center justify-between bg-white p-6 hover:bg-gray-50 transition-colors"
              >
                <span className="text-left font-bold text-black text-lg">
                  HOW DO I QUALIFY AND CLAIM MY REWARD?
                </span>
                <ChevronUp
                  className={`transition-transform duration-300 ${
                    openFaq ? 'rotate-180' : ''
                  }`}
                  size={24}
                  strokeWidth={3}
                />
              </button>

              {/* FAQ Answer */}
              {openFaq && (
                <div className="border-t border-gray-200 bg-gray-50 p-6">
                  <p className="text-gray-700 leading-relaxed">
                    To qualify for your Tesco credit, you&apos;ll need to complete 5-8 deals to unlock
                    the full £500 reward. Be sure to finish each deal from start to completion. Once
                    all deals are successfully completed, you&apos;ll be eligible to claim your reward.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

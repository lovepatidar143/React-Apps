import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Currency Converter
          </h1>

          <p className="text-slate-300 mt-2">
            Convert currencies instantly
          </p>
        </div>

        {/* Amount */}
        <div className="mb-6">
          <label className="block text-slate-200 mb-2">
            Amount
          </label>

          <input
            type="number"
            placeholder="Enter amount"
            className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-blue-500"
          />
        </div>

        {/* From Currency */}
        <div className="mb-5">
          <label className="block text-slate-200 mb-2">
            From
          </label>

          <select className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white outline-none focus:border-blue-500">
            <option value="USD">🇺🇸 USD - United States Dollar</option>
            <option value="EUR">🇪🇺 EUR - Euro</option>
            <option value="GBP">🇬🇧 GBP - British Pound Sterling</option>
            <option value="INR">🇮🇳 INR - Indian Rupee</option>
            <option value="JPY">🇯🇵 JPY - Japanese Yen</option>
            <option value="CNY">🇨🇳 CNY - Chinese Yuan</option>
            <option value="AUD">🇦🇺 AUD - Australian Dollar</option>
            <option value="CAD">🇨🇦 CAD - Canadian Dollar</option>
            <option value="CHF">🇨🇭 CHF - Swiss Franc</option>
            <option value="SGD">🇸🇬 SGD - Singapore Dollar</option>
            <option value="HKD">🇭🇰 HKD - Hong Kong Dollar</option>
            <option value="NZD">🇳🇿 NZD - New Zealand Dollar</option>
            <option value="SEK">🇸🇪 SEK - Swedish Krona</option>
            <option value="NOK">🇳🇴 NOK - Norwegian Krone</option>
            <option value="DKK">🇩🇰 DKK - Danish Krone</option>
            <option value="ZAR">🇿🇦 ZAR - South African Rand</option>
            <option value="BRL">🇧🇷 BRL - Brazilian Real</option>
            <option value="MXN">🇲🇽 MXN - Mexican Peso</option>
            <option value="RUB">🇷🇺 RUB - Russian Ruble</option>
            <option value="TRY">🇹🇷 TRY - Turkish Lira</option>
            <option value="KRW">🇰🇷 KRW - South Korean Won</option>
            <option value="THB">🇹🇭 THB - Thai Baht</option>
            <option value="MYR">🇲🇾 MYR - Malaysian Ringgit</option>
            <option value="IDR">🇮🇩 IDR - Indonesian Rupiah</option>
            <option value="PHP">🇵🇭 PHP - Philippine Peso</option>
            <option value="VND">🇻🇳 VND - Vietnamese Dong</option>
            <option value="AED">🇦🇪 AED - UAE Dirham</option>
            <option value="SAR">🇸🇦 SAR - Saudi Riyal</option>
            <option value="QAR">🇶🇦 QAR - Qatari Riyal</option>
            <option value="KWD">🇰🇼 KWD - Kuwaiti Dinar</option>
            <option value="BHD">🇧🇭 BHD - Bahraini Dinar</option>
            <option value="OMR">🇴🇲 OMR - Omani Rial</option>
            <option value="EGP">🇪🇬 EGP - Egyptian Pound</option>
            <option value="PKR">🇵🇰 PKR - Pakistani Rupee</option>
            <option value="BDT">🇧🇩 BDT - Bangladeshi Taka</option>
            <option value="LKR">🇱🇰 LKR - Sri Lankan Rupee</option>
            <option value="NPR">🇳🇵 NPR - Nepalese Rupee</option>
            <option value="ILS">🇮🇱 ILS - Israeli New Shekel</option>
            <option value="PLN">🇵🇱 PLN - Polish Złoty</option>
            <option value="CZK">🇨🇿 CZK - Czech Koruna</option>
            <option value="HUF">🇭🇺 HUF - Hungarian Forint</option>
            <option value="RON">🇷🇴 RON - Romanian Leu</option>
            <option value="UAH">🇺🇦 UAH - Ukrainian Hryvnia</option>
            <option value="ARS">🇦🇷 ARS - Argentine Peso</option>
            <option value="CLP">🇨🇱 CLP - Chilean Peso</option>
            <option value="COP">🇨🇴 COP - Colombian Peso</option>
            <option value="PEN">🇵🇪 PEN - Peruvian Sol</option>
            <option value="NGN">🇳🇬 NGN - Nigerian Naira</option>
            <option value="KES">🇰🇪 KES - Kenyan Shilling</option>
            <option value="GHS">🇬🇭 GHS - Ghanaian Cedi</option>
          </select>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center my-5">
          <button className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white text-xl shadow-lg">
            ⇅
          </button>
        </div>

        {/* To Currency */}
        <div className="mb-6">
          <label className="block text-slate-200 mb-2">
            To
          </label>

          <select className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white outline-none focus:border-blue-500">
              <option value="USD">🇺🇸 USD - United States Dollar</option>
              <option value="EUR">🇪🇺 EUR - Euro</option>
              <option value="GBP">🇬🇧 GBP - British Pound Sterling</option>
              <option value="INR">🇮🇳 INR - Indian Rupee</option>
              <option value="JPY">🇯🇵 JPY - Japanese Yen</option>
              <option value="CNY">🇨🇳 CNY - Chinese Yuan</option>
              <option value="AUD">🇦🇺 AUD - Australian Dollar</option>
              <option value="CAD">🇨🇦 CAD - Canadian Dollar</option>
              <option value="CHF">🇨🇭 CHF - Swiss Franc</option>
              <option value="SGD">🇸🇬 SGD - Singapore Dollar</option>
              <option value="HKD">🇭🇰 HKD - Hong Kong Dollar</option>
              <option value="NZD">🇳🇿 NZD - New Zealand Dollar</option>
              <option value="SEK">🇸🇪 SEK - Swedish Krona</option>
              <option value="NOK">🇳🇴 NOK - Norwegian Krone</option>
              <option value="DKK">🇩🇰 DKK - Danish Krone</option>
              <option value="ZAR">🇿🇦 ZAR - South African Rand</option>
              <option value="BRL">🇧🇷 BRL - Brazilian Real</option>
              <option value="MXN">🇲🇽 MXN - Mexican Peso</option>
              <option value="RUB">🇷🇺 RUB - Russian Ruble</option>
              <option value="TRY">🇹🇷 TRY - Turkish Lira</option>
              <option value="KRW">🇰🇷 KRW - South Korean Won</option>
              <option value="THB">🇹🇭 THB - Thai Baht</option>
              <option value="MYR">🇲🇾 MYR - Malaysian Ringgit</option>
              <option value="IDR">🇮🇩 IDR - Indonesian Rupiah</option>
              <option value="PHP">🇵🇭 PHP - Philippine Peso</option>
              <option value="VND">🇻🇳 VND - Vietnamese Dong</option>
              <option value="AED">🇦🇪 AED - UAE Dirham</option>
              <option value="SAR">🇸🇦 SAR - Saudi Riyal</option>
              <option value="QAR">🇶🇦 QAR - Qatari Riyal</option>
              <option value="KWD">🇰🇼 KWD - Kuwaiti Dinar</option>
              <option value="BHD">🇧🇭 BHD - Bahraini Dinar</option>
              <option value="OMR">🇴🇲 OMR - Omani Rial</option>
              <option value="EGP">🇪🇬 EGP - Egyptian Pound</option>
              <option value="PKR">🇵🇰 PKR - Pakistani Rupee</option>
              <option value="BDT">🇧🇩 BDT - Bangladeshi Taka</option>
              <option value="LKR">🇱🇰 LKR - Sri Lankan Rupee</option>
              <option value="NPR">🇳🇵 NPR - Nepalese Rupee</option>
              <option value="ILS">🇮🇱 ILS - Israeli New Shekel</option>
              <option value="PLN">🇵🇱 PLN - Polish Złoty</option>
              <option value="CZK">🇨🇿 CZK - Czech Koruna</option>
              <option value="HUF">🇭🇺 HUF - Hungarian Forint</option>
              <option value="RON">🇷🇴 RON - Romanian Leu</option>
              <option value="UAH">🇺🇦 UAH - Ukrainian Hryvnia</option>
              <option value="ARS">🇦🇷 ARS - Argentine Peso</option>
              <option value="CLP">🇨🇱 CLP - Chilean Peso</option>
              <option value="COP">🇨🇴 COP - Colombian Peso</option>
              <option value="PEN">🇵🇪 PEN - Peruvian Sol</option>
              <option value="NGN">🇳🇬 NGN - Nigerian Naira</option>
              <option value="KES">🇰🇪 KES - Kenyan Shilling</option>
              <option value="GHS">🇬🇭 GHS - Ghanaian Cedi</option>
          </select>
        </div>

        {/* Result */}
        <div className="rounded-xl bg-slate-800 border border-slate-700 p-5 mb-6 text-center">
          <p className="text-slate-400 text-sm">
            Converted Amount
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            ₹0.00
          </h2>
        </div>

        {/* Convert Button */}
        <button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-300 py-3 text-lg font-semibold text-white shadow-lg">
          Convert Currency
        </button>

      </div>
    </div>
  );
}

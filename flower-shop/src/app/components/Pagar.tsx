
import { useState } from "react";
import { toast } from "sonner";

export default function Pagar() {
    const [paymentStatus, setPaymentStatus] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = () => {
        setIsProcessing(true);
        setPaymentStatus("Procesando pago...");

        setTimeout(() => {
            setIsProcessing(false);
            setPaymentStatus("¡Pago completado con éxito!");
        }, 2000);
    };

    return (
        <div className="flex">
            <div className="text-center">
                <button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className={`flex items-center cursor-pointer p-3 font-bold text-white text-sm rounded-md shadow-md transition-all duration-300 transform ${isProcessing ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-95 hover:shadow-lg"
                        }`}
                >
                    <svg
                        className="w-5 h-4 mr-2"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="20" height="16" rx="2" fill="white" />
                        <rect y="3" width="20" height="3" fill="#000" />
                        <rect y="11" width="12" height="2" rx="1" fill="#888" />
                    </svg>
                    <div className="flex items-center justify-center">
                        {isProcessing ? "Procesando..." : "Pagar ahora"}
                    </div>
                </button>
                <span className="hidden">                {paymentStatus && (
                    toast.success(paymentStatus)
                )}
                </span>
            </div>
        </div>
    );
}
import React, { useState, useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

const ScanQRCode = () => {
  const [dishData, setDishData] = useState(null); // Stores current scanned dish
  const [error, setError] = useState(""); // Stores error message
  const [scannedDishes, setScannedDishes] = useState([]); // Stores all scanned dishes
  const [scanningStatus, setScanningStatus] = useState(""); // Stores the scanning status message
  const [isScanning, setIsScanning] = useState(false); // Tracks whether scanning is started
  const videoRef = useRef(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    if (videoRef.current && isScanning) {
      console.log("Video element found, initializing scanner...");
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch((err) => {
          setError("Error accessing camera");
          console.error("Error accessing camera:", err);
        });

      videoRef.current.onloadedmetadata = () => {
        console.log(
          `Video dimensions: ${videoRef.current.videoWidth}x${videoRef.current.videoHeight}`
        );
      };

      // Initialize the QR code scanner
      codeReader
        .decodeFromVideoDevice(null, videoRef.current, (result, err) => {
          if (result) {
            console.log("QR Code Scanned:", result.getText());
            try {
              const parsedData = JSON.parse(result.getText().trim());
              setDishData(parsedData);
              setScanningStatus("QR Code Scanning is completed");
            } catch (error) {
              console.error("JSON Parsing Error:", error);
            }
          } else if (err) {
            console.error("Decoding Error:", err.message);
          }
        })
        .catch((err) => {
          setError("Error initializing scanner");
          console.error("Initialization error:", err);
        });

      // Cleanup on unmount
      return () => {
        codeReader.reset();
        console.log("ZXing Reader Reset");
      };
    }
  }, [isScanning]);

  const handleScan = () => {
    if (dishData) {
      setScannedDishes((prevDishes) => [...prevDishes, dishData]);
      setDishData(null);
      setScanningStatus("");
      setIsScanning(false); // Stop scanning after adding the dish
    }
  };

  const startScanning = () => {
    setIsScanning(true);
    setScanningStatus(
      "Start scanning by holding your QR code in front of the camera."
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-center">Scan QR Code</h1>

      {/* Scanning area container */}
      <div
        className="flex justify-center items-center my-4 border-2 border-gray-300 rounded-lg p-2"
        style={{ height: "500px", width: "400px" }}
      >
        <video ref={videoRef} className="w-full h-full object-cover"></video>
      </div>

      {/* Scanning status message */}
      {scanningStatus && (
        <p className="text-center mt-4 text-lg">{scanningStatus}</p>
      )}

      {!isScanning ? (
        <button
          onClick={startScanning}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 mx-auto block"
        >
          Start Scanning
        </button>
      ) : (
        <button
          onClick={handleScan}
          className="bg-green-500 text-white py-2 px-4 rounded mt-4 mx-auto block"
        >
          Add Scanned Dish
        </button>
      )}

      {error && <p className="text-red-500 text-center mt-2">{error}</p>}

      {/* Table to display scanned dishes */}
      {scannedDishes.length > 0 && (
        <table className="min-w-full mt-6 border-collapse shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 border border-gray-300 text-left">
                Dish Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Item Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {scannedDishes.map((dish, index) => (
              <React.Fragment key={index}>
                {dish.items.map((item, itemIndex) => (
                  <tr
                    key={itemIndex}
                    className={`hover:bg-blue-100 ${
                      itemIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    {itemIndex === 0 && (
                      <td
                        rowSpan={dish.items.length}
                        className="px-4 py-2 border border-gray-300 font-semibold"
                      >
                        {dish.dishName}
                      </td>
                    )}
                    <td className="px-4 py-2 border border-gray-300">
                      {item.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.quantity}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ScanQRCode;

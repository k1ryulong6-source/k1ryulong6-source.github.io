CANTA local model references

Optional stronger Spanish transcription:
https://huggingface.co/Xenova/whisper-base
Pinned revision fe2c6a2f96fa5e8e931a3fdd87914c3e2a7945ae.
Unmodified ONNX distribution identifies Apache-2.0 (full text is included
in RMVPE-Apache-2.0.txt). Source Whisper implementation and weights:
https://github.com/openai/whisper (MIT, included in Whisper-MIT.txt).
Model weights remain outside the source and deployment archives.
Mixed precision choice follows the Transformers.js 3.8.1 per-module dtype guide:
https://huggingface.co/docs/transformers.js/v3.8.1/en/guides/dtypes

CANTA optional vocal pitch reference

RMVPE research and original implementation:
https://arxiv.org/abs/2306.15412
https://github.com/Dream-High/RMVPE
Original project license: Apache-2.0 (included unchanged).

Maintainer ONNX model distribution:
https://huggingface.co/lj1995/VoiceConversionWebUI
Revision e6d0c1a17da07c33557852f9dfa2bd44cc75737d, rmvpe.onnx
SHA256 5370e71ac80af8b4b7c793d27efd51fd8bf962de3a7ede0766dac0befa3660fd
The maintainer distribution identifies its license as MIT.

Frontend and decoding settings were checked against:
https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI/blob/81eed5e8f68b6bed1789f682fe78cdd324495afc/infer/rmvpe.py
RVC MIT attribution and license are included unchanged.
CANTA reimplements those settings in TypeScript with bounded PCM chunks,
strict validation and foreground cancellation. The model file is unmodified,
downloaded only on explicit request, and is not included in the source ZIP.

Browser runtime: ONNX Runtime Web, MIT, Microsoft Corporation.
https://github.com/microsoft/onnxruntime
The installed runtime preserves its bundled license notices. Full MIT text follows; source: https://raw.githubusercontent.com/microsoft/onnxruntime/v1.22.0/LICENSE

MIT License

Copyright (c) Microsoft Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

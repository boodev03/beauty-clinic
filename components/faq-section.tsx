"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Liệu trình điều trị có đau không?",
    answer:
      "Các liệu trình của chúng tôi được thực hiện với công nghệ hiện đại và có sử dụng thuốc tê, do đó khách hàng sẽ không cảm thấy đau. Bác sĩ sẽ tư vấn cụ thể về cảm giác trong quá trình điều trị tùy từng dịch vụ.",
  },
  {
    question: "Thời gian phục hồi sau điều trị là bao lâu?",
    answer:
      "Thời gian phục hồi phụ thuộc vào từng loại dịch vụ và cơ địa của khách hàng. Thông thường, các dịch vụ nhẹ như chăm sóc da có thể trở lại sinh hoạt bình thường ngay lập tức, trong khi các dịch vụ như phun xăm cần 3-5 ngày để phục hồi hoàn toàn.",
  },
  {
    question: "Chi phí điều trị có đắt không?",
    answer:
      "Chi phí điều trị được tính dựa trên từng dịch vụ cụ thể và nhu cầu của khách hàng. Chúng tôi cam kết mang đến mức giá cạnh tranh với chất lượng tốt nhất. Quý khách có thể đặt lịch tư vấn miễn phí để được báo giá chi tiết.",
  },
  {
    question: "Làm thế nào để duy trì kết quả sau điều trị?",
    answer:
      "Để duy trì kết quả tốt nhất, khách hàng nên tuân thủ các hướng dẫn chăm sóc sau điều trị của bác sĩ. Chúng tôi sẽ tư vấn chi tiết về chế độ chăm sóc da, thực phẩm nên dùng và các hoạt động nên tránh trong thời gian phục hồi.",
  },
  {
    question: "Các bác sĩ có chứng chỉ hành nghề không?",
    answer:
      "Tất cả bác sĩ của chúng tôi đều có chứng chỉ hành nghề và nhiều năm kinh nghiệm trong lĩnh vực thẩm mỹ. Đội ngũ của chúng tôi thường xuyên được đào tạo và cập nhật các kỹ thuật mới nhất.",
  },
  {
    question: "Có cần đặt lịch trước khi đến không?",
    answer:
      "Để đảm bảo được phục vụ tốt nhất, quý khách nên đặt lịch trước khi đến. Việc này giúp chúng tôi sắp xếp thời gian phù hợp và chuẩn bị chu đáo cho buổi tư vấn hoặc điều trị của quý khách.",
  },
];

export function FaqSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Câu Hỏi Thường Gặp
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Giải đáp những thắc mắc phổ biến về dịch vụ của chúng tôi
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className="bg-card rounded-lg px-4 sm:px-6 py-3 sm:py-4 data-[state=open]:pb-5 sm:data-[state=open]:pb-6"
              >
                <AccordionTrigger className="text-sm sm:text-base font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-3 sm:pt-4 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

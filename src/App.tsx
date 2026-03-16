import React, { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index: number | null) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Cảnh báo', href: '#warning' },
    { name: 'Pháp lý', href: '#legal' },
    { name: 'Khuyến nghị', href: '#recommend' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  const warnings = [
    { title: 'Hứa hẹn lãi cao bất thường', desc: 'Cam kết lợi nhuận vượt xa thực tế để thu hút người tham gia mới.' },
    { title: 'Chậm trả nhiều lần', desc: 'Liên tục đưa ra lý do trì hoãn việc thanh toán tiền hụi cho người đến kỳ nhận.' },
    { title: 'Né tránh gặp mặt', desc: 'Không nghe máy, khóa mạng xã hội hoặc không xuất hiện tại nơi cư trú.' },
    { title: 'Giao dịch thiếu giấy tờ', desc: 'Yêu cầu nộp tiền nhưng không có biên nhận, sổ hụi hoặc chữ ký xác nhận rõ ràng.' },
    { title: 'Thay đổi liên lạc bất thường', desc: 'Đột ngột thay đổi số điện thoại, nơi ở hoặc thông tin cá nhân mà không thông báo.' },
    { title: 'Nhiều người cùng phản ánh', desc: 'Có thông tin từ cộng đồng về việc chủ hụi đang gặp khó khăn tài chính hoặc có dấu hiệu tẩu tán.' },
  ];

  const actions = [
    'Lưu lại toàn bộ tin nhắn trao đổi',
    'Lưu giữ biên lai chuyển khoản ngân hàng',
    'Chụp ảnh sổ hụi và các giấy tờ liên quan',
    'Ghi nhận thông tin những người cùng tham gia',
    'Ngừng giao thêm tiền nếu thấy dấu hiệu rủi ro',
    'Trình báo cơ quan chức năng khi cần thiết',
  ];

  const recommendations = [
    'Chỉ tham gia khi có thông tin người tổ chức rõ ràng',
    'Ưu tiên có bằng chứng giấy tờ hoặc chuyển khoản',
    'Hạn chế tham gia khi người tổ chức thiếu uy tín',
    'Nên trao đổi với người thân khi góp số tiền lớn',
    'Theo dõi lịch góp và lịch nhận rõ ràng',
    'Báo cáo sớm khi có dấu hiệu bất thường',
  ];

  const faqs = [
    { q: 'Hụi là gì?', a: 'Hụi (họ, biêu, phường) là hình thức giao dịch về tài sản theo tập quán trên cơ sở thỏa thuận của một nhóm người tập hợp nhau lại cùng định kỳ góp một phần tài sản để cho một người trong nhóm được lĩnh phần tài sản đó.' },
    { q: 'Khi nào nên nghi ngờ có rủi ro?', a: 'Khi chủ hụi bắt đầu chậm trả tiền hốt hụi, hứa hẹn lãi suất cao vô lý, hoặc có dấu hiệu né tránh liên lạc với các thành viên trong dây hụi.' },
    { q: 'Cần lưu lại những bằng chứng gì?', a: 'Bạn cần lưu lại sổ hụi, giấy biên nhận tiền, lịch sử chuyển khoản, tin nhắn trao đổi qua Zalo/Messenger và danh sách những người cùng tham gia.' },
    { q: 'Có nên tiếp tục góp khi người tổ chức chậm trả không?', a: 'Không nên. Khi có dấu hiệu chậm trả, bạn cần yêu cầu làm rõ tình hình tài chính và tạm dừng việc đóng góp để tránh thiệt hại thêm.' },
    { q: 'Nên liên hệ ai khi xảy ra tranh chấp?', a: 'Bạn nên liên hệ cơ quan Công an địa phương hoặc Tòa án nhân dân để được hướng dẫn giải quyết theo quy định pháp luật dân sự hoặc hình sự.' },
    { q: 'Trang này có phải cơ quan chức năng không?', a: 'Không. Đây là trang thông tin cộng đồng nhằm mục đích cảnh báo rủi ro và nâng cao nhận thức pháp lý cho người dân.' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-800 rounded-lg flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight uppercase text-red-900 hidden sm:block">Cảnh Báo Hụi Sóc Trăng</span>
            <span className="font-bold text-lg tracking-tight uppercase text-red-900 sm:hidden">CBH Sóc Trăng</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-red-800 transition-colors uppercase tracking-wider">
                {link.name}
              </a>
            ))}
            <button className="bg-red-800 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-900 transition-all shadow-lg shadow-red-900/20">
              XEM THÔNG TIN
            </button>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 absolute w-full left-0">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-lg font-semibold text-slate-700">
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-red-800 text-white py-4 rounded-xl font-bold">XEM THÔNG TIN</button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-red-50 text-red-800 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-red-100">
            Thông tin cộng đồng Sóc Trăng
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-tight">
            Cảnh Báo Rủi Ro Hụi <br />
            <span className="text-red-800 underline decoration-red-200 underline-offset-8">Tại Sóc Trăng</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
            Cập nhật thông tin cảnh báo cộng đồng, hướng dẫn phòng tránh và cung cấp kiến thức pháp lý tham khảo liên quan đến các vụ việc hụi có dấu hiệu rủi ro.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#warning" className="w-full sm:w-auto bg-red-800 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-900 transition-all shadow-xl shadow-red-900/30">
              Xem cảnh báo
            </a>
            <a href="#legal" className="w-full sm:w-auto bg-slate-100 text-slate-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all">
              Thông tin pháp lý
            </a>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-red-50 text-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-9.463 0a3 3 0 00-4.682 2.72 9.094 9.094 0 003.741.479m9.463-9.463a3 3 0 10-4.682-2.72 3 3 0 004.682 2.72m-9.463 0a3 3 0 10-4.682-2.72 3 3 0 004.682 2.72M10.5 22.5A7.5 7.5 0 1010.5 7.5a7.5 7.5 0 000 15z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-800">Thông tin cộng đồng</h3>
            </div>
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-red-50 text-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6.119c-.035.505-.05 1.016-.05 1.529 0 5.552 2.346 10.569 6.103 14.126a1.215 1.215 0 001.594 0 11.952 11.952 0 006.103-14.126 11.959 11.959 0 01-7.652-4.396z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-800">Hướng dẫn phòng tránh</h3>
            </div>
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-red-50 text-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0a7.5 7.5 0 11-7.5-7.5 7.5 7.5 0 017.5 7.5zm0 0a7.5 7.5 0 107.5-7.5 7.5 7.5 0 00-7.5 7.5z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-800">Kiến thức pháp lý</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION GIỚI THIỆU */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-black text-red-900 mb-6">Trang này dùng để làm gì?</h2>
              <ul className="space-y-4">
                {[
                  'Cảnh báo rủi ro liên quan đến hụi',
                  'Giúp người dân biết cách phòng tránh',
                  'Hướng dẫn lưu bằng chứng khi có tranh chấp',
                  'Cung cấp thông tin pháp lý tham khảo dễ hiểu'
                ].map((text, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-slate-700 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-red-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-800 rounded-full opacity-50"></div>
              <p className="relative z-10 text-lg italic leading-relaxed">
                "Mục tiêu của chúng tôi là giúp người dân Sóc Trăng nâng cao cảnh giác, biết cách bảo vệ quyền lợi và tài sản của mình trước những rủi ro khi tham gia hụi."
              </p>
              <div className="mt-6 flex items-center space-x-3">
                <div className="w-10 h-1 bg-white/30"></div>
                <span className="text-sm font-bold uppercase tracking-widest opacity-70">Ban quản trị</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CẢNH BÁO CHUNG */}
      <section id="warning" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">Các Dấu Hiệu Rủi Ro Cần Cảnh Giác</h2>
            <div className="w-24 h-1.5 bg-red-800 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">Hãy chú ý các biểu hiện sau đây để kịp thời bảo vệ tài sản của bạn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {warnings.map((w, i) => (
              <div key={i} className="group p-8 bg-white border border-slate-100 rounded-2xl hover:border-red-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-slate-50 text-red-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-800 group-hover:text-white transition-colors">
                  <span className="text-xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{w.title}</h3>
                <p className="text-slate-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION NGƯỜI DÂN NÊN LÀM GÌ */}
      <section className="py-24 bg-red-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Người Dân Nên Làm Gì Khi Có Dấu Hiệu Bất Thường?</h2>
              <p className="text-red-100 text-lg mb-10 leading-relaxed">
                Khi nhận thấy các dấu hiệu rủi ro, hãy bình tĩnh và thực hiện ngay các bước sau để bảo vệ quyền lợi hợp pháp của mình.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-red-900 bg-red-800 flex items-center justify-center text-[10px] font-bold">
                      USER
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-red-200">+1,200 người đã xem thông tin này</span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-1 gap-4">
                {actions.map((action, i) => (
                  <div key={i} className="flex items-center p-5 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
                    <div className="w-8 h-8 bg-white text-red-900 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">
                      {i + 1}
                    </div>
                    <span className="font-bold text-lg">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION THÔNG TIN PHÁP LÝ */}
      <section id="legal" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-28">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Thông Tin Pháp Lý Tham Khảo</h2>
                <div className="w-16 h-1 bg-red-800 mb-6"></div>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Nắm vững các quy định pháp luật cơ bản giúp bạn tự tin hơn trong việc bảo vệ tài sản và xử lý tranh chấp.
                </p>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-red-800 mb-2">Bạn có biết?</h4>
                  <p className="text-sm text-slate-500 italic">Nghị định 19/2019/NĐ-CP quy định chi tiết về họ, hụi, biêu, phường.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-4 text-red-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <h3 className="text-xl font-bold">Trách nhiệm pháp lý</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Người có hành vi lợi dụng việc tổ chức hụi để chiếm dụng tiền của người khác có thể bị xử lý theo quy định pháp luật, tùy tính chất và mức độ vi phạm. 
                  Có thể phát sinh trách nhiệm dân sự, hành chính hoặc hình sự nếu có dấu hiệu gian dối, bỏ trốn, hoặc chiếm đoạt tài sản.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-4 text-red-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <h3 className="text-xl font-bold">Bằng chứng là chìa khóa</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Người dân nên lưu giữ đầy đủ bằng chứng (sổ hụi, tin nhắn, sao kê chuyển khoản) để bảo vệ quyền lợi của mình. Đây là cơ sở pháp lý quan trọng nhất để các cơ quan chức năng có thể can thiệp và hỗ trợ thu hồi tài sản.
                </p>
              </div>
              <div id="disclaimer" className="bg-red-50 p-8 rounded-3xl border border-red-100">
                <h3 className="text-xl font-bold text-red-900 mb-4 uppercase tracking-wider">Lưu Ý Quan Trọng</h3>
                <ul className="space-y-3 text-red-800 font-medium">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Trang này chỉ mang tính chất cảnh báo và chia sẻ thông tin tham khảo.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Mọi thông tin liên quan đến cá nhân, vụ việc cụ thể cần được kiểm chứng.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Nội dung trên trang không thay thế kết luận của cơ quan chức năng hoặc tư vấn pháp lý chính thức.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Người đọc nên liên hệ luật sư hoặc cơ quan có thẩm quyền khi cần.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION KHUYẾN NGHỊ */}
      <section id="recommend" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">Khuyến Nghị Để Hạn Chế Rủi Ro</h2>
            <div className="w-24 h-1.5 bg-red-800 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((rec, i) => (
              <div key={i} className="flex items-center p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mr-4 shrink-0">
                  ✓
                </div>
                <span className="text-slate-700 font-bold">{rec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION HỎI ĐÁP NHANH */}
      <section className="py-24 bg-slate-900 text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center uppercase tracking-tight">Câu Hỏi Thường Gặp</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
                <button 
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  onClick={() => toggleFaq(i)}
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <span className={`text-2xl transition-transform duration-300 ${activeFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {activeFaq === i && (
                  <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-50 -z-10"></div>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-red-900 mb-6 leading-tight">Chủ Động Cảnh Giác Để Bảo Vệ Quyền Lợi Của Mình</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Theo dõi thông tin cảnh báo, nắm kiến thức pháp lý cơ bản và lưu giữ bằng chứng đầy đủ khi tham gia hụi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#warning" className="w-full sm:w-auto bg-red-800 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-red-900 transition-all shadow-2xl shadow-red-900/40">
              XEM CẢNH BÁO
            </a>
            <a href="#legal" className="w-full sm:w-auto bg-white text-red-900 border-2 border-red-800 px-12 py-5 rounded-2xl font-black text-xl hover:bg-red-50 transition-all">
              XEM PHÁP LÝ
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-white border-t border-slate-100 pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-red-800 rounded flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <span className="font-bold text-xl tracking-tight uppercase text-red-900">Cảnh Báo Hụi Sóc Trăng</span>
              </div>
              <p className="text-slate-500 max-w-md leading-relaxed mb-6">
                Trang thông tin cộng đồng hỗ trợ cảnh báo rủi ro và nâng cao nhận thức pháp lý cho người dân tại tỉnh Sóc Trăng.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider">Liên kết nhanh</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-500 hover:text-red-800 transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider">Hỗ trợ</h4>
              <ul className="space-y-4 text-slate-500">
                <li>Email: hotro@canhbaohuisoctrang.vn</li>
                <li>Địa chỉ: TP. Sóc Trăng, Tỉnh Sóc Trăng</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">© 2024 Cảnh Báo Hụi Sóc Trăng. Trang thông tin vì cộng đồng.</p>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
}

export interface ContentSection {
  heading: string;
  body: string;
}

const privacyContent: Record<string, ContentSection[]> = {
  'zh-TW': [
    {
      heading: '我們收集的資訊',
      body: 'VOIBACK 不會收集、儲存或傳輸任何個人資訊。所有音訊處理均在您的手機裝置上離線完成。我們沒有營運伺服器、不維護資料庫，也不需要使用者註冊帳號。',
    },
    {
      heading: '麥克風存取',
      body: 'VOIBACK 僅在遊玩過程中需要麥克風權限來錄製您的聲音。所有錄音均在裝置上即時處理，絕不會上傳或儲存到外部。暫時的音訊檔案僅在遊戲階段期間保留於本地，退出 App 後即清除。',
    },
    {
      heading: '第三方服務',
      body: 'VOIBACK 整合 Google AdMob 廣告服務與 Firebase Crashlytics 崩潰回報。這些服務可能依照其各自的隱私權政策收集匿名化的使用資料。我們不會與這些服務分享音訊錄音或個人識別資訊。',
    },
    {
      heading: '兒童隱私',
      body: 'VOIBACK 在 iOS 上評級為 4+、Android 上為「所有人」。我們不會刻意收集兒童的個人資訊。如果您認為兒童透過我們的第三方服務提供了個人資料，請聯繫我們，我們將協助移除。',
    },
    {
      heading: '本政策的變更',
      body: '我們可能不時更新本隱私權政策。變更將在此頁面上公布，並附上更新後的修訂日期。建議您定期查閱本政策。',
    },
    {
      heading: '聯絡方式',
      body: '如果您對本隱私權政策有任何疑問，請透過 voiback.app@gmail.com 與我們聯繫。',
    },
  ],
  'zh-CN': [
    {
      heading: '我们收集的信息',
      body: 'VOIBACK 不会收集、存储或传输任何个人信息。所有音频处理均在您的手机设备上离线完成。我们不运营服务器、不维护数据库，也不需要用户注册账号。',
    },
    {
      heading: '麦克风访问',
      body: 'VOIBACK 仅在游戏过程中需要麦克风权限来录制您的声音。所有录音均在设备上实时处理，绝不会上传或存储到外部。临时的音频文件仅在游戏会话期间保留于本地，退出 App 后即清除。',
    },
    {
      heading: '第三方服务',
      body: 'VOIBACK 集成了 Google AdMob 广告服务与 Firebase Crashlytics 崩溃报告。这些服务可能依照其各自的隐私政策收集匿名化的使用数据。我们不会与这些服务分享音频录音或个人识别信息。',
    },
    {
      heading: '儿童隐私',
      body: 'VOIBACK 在 iOS 上评级为 4+，Android 上为"所有人"。我们不会刻意收集儿童的个人信息。如果您认为儿童通过我们的第三方服务提供了个人数据，请与我们联系，我们将协助移除。',
    },
    {
      heading: '本政策的变更',
      body: '我们可能不时更新本隐私政策。变更将在此页面上公布，并附上更新后的修订日期。建议您定期查阅本政策。',
    },
    {
      heading: '联系方式',
      body: '如果您对本隐私政策有任何疑问，请通过 voiback.app@gmail.com 与我们联系。',
    },
  ],
  en: [
    {
      heading: 'Information We Collect',
      body: 'VOIBACK does not collect, store, or transmit any personal information. All audio processing is performed locally on your device. We do not operate servers, maintain databases, or require user accounts.',
    },
    {
      heading: 'Microphone Access',
      body: 'VOIBACK requires microphone access solely for recording your voice during gameplay. All recordings are processed in real-time on your device and are never uploaded or stored externally. Temporary audio files are kept locally only for the duration of each game session and are discarded when you exit the app.',
    },
    {
      heading: 'Third-Party Services',
      body: 'VOIBACK integrates Google AdMob for advertising and Firebase Crashlytics for crash reporting. These services may collect anonymized usage data in accordance with their respective privacy policies. We do not share audio recordings or personal identifiers with these services.',
    },
    {
      heading: "Children's Privacy",
      body: 'VOIBACK is rated 4+ on iOS and Everyone on Android. We do not knowingly collect any personal information from children. If you believe a child has provided personal data through our third-party services, please contact us and we will assist in removing it.',
    },
    {
      heading: 'Changes to This Policy',
      body: 'We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.',
    },
    {
      heading: 'Contact',
      body: 'If you have any questions about this privacy policy, please contact us at voiback.app@gmail.com.',
    },
  ],
  ja: [
    {
      heading: '収集する情報',
      body: 'VOIBACK は個人情報を収集、保存、送信することはありません。すべての音声処理はお客様のデバイス上でローカルに実行されます。当社はサーバーを運用せず、データベースを維持せず、ユーザーアカウントも必要としません。',
    },
    {
      heading: 'マイクアクセス',
      body: 'VOIBACK はゲームプレイ中の音声録音のためにのみマイクへのアクセスを必要とします。すべての録音はデバイス上でリアルタイムに処理され、外部にアップロードまたは保存されることはありません。一時的な音声ファイルは各ゲームセッション中のみローカルに保持され、アプリ終了時に破棄されます。',
    },
    {
      heading: 'サードパーティサービス',
      body: 'VOIBACK は広告配信に Google AdMob、クラッシュレポートに Firebase Crashlytics を利用しています。これらのサービスは、それぞれのプライバシーポリシーに従って匿名化された利用データを収集する場合があります。当社は音声録音や個人識別情報をこれらのサービスと共有しません。',
    },
    {
      heading: '子どものプライバシー',
      body: 'VOIBACK は iOS で 4+、Android で「Everyone」に評価されています。当社は意図的に子どもから個人情報を収集することはありません。お子様が当社のサードパーティサービスを通じて個人データを提供したと思われる場合は、ご連絡ください。削除をお手伝いします。',
    },
    {
      heading: '本ポリシーの変更',
      body: '当社は本プライバシーポリシーを随時更新することがあります。変更はこのページに改訂日付とともに掲載されます。定期的に本ポリシーをご確認いただくことをお勧めします。',
    },
    {
      heading: 'お問い合わせ',
      body: '本プライバシーポリシーに関するご質問は、voiback.app@gmail.com までお問い合わせください。',
    },
  ],
  ko: [
    {
      heading: '수집하는 정보',
      body: 'VOIBACK은 어떠한 개인정보도 수집, 저장, 전송하지 않습니다. 모든 오디오 처리는 사용자 기기에서 로컬로 수행됩니다. 당사는 서버를 운영하지 않으며, 데이터베이스를 유지하지 않고, 사용자 계정도 필요로 하지 않습니다.',
    },
    {
      heading: '마이크 접근',
      body: 'VOIBACK은 게임 플레이 중 음성 녹음을 위해서만 마이크 접근 권한이 필요합니다. 모든 녹음은 기기에서 실시간으로 처리되며 외부에 업로드되거나 저장되지 않습니다. 임시 오디오 파일은 각 게임 세션 동안만 로컬에 보관되며 앱 종료 시 폐기됩니다.',
    },
    {
      heading: '타사 서비스',
      body: 'VOIBACK은 광고 제공에 Google AdMob, 충돌 보고에 Firebase Crashlytics를 통합합니다. 이 서비스들은 각각의 개인정보 처리방침에 따라 익명화된 사용 데이터를 수집할 수 있습니다. 당사는 오디오 녹음이나 개인 식별 정보를 이러한 서비스와 공유하지 않습니다.',
    },
    {
      heading: '아동 프라이버시',
      body: 'VOIBACK은 iOS에서 4+, Android에서 "모든 연령" 등급입니다. 당사는 의도적으로 아동으로부터 개인정보를 수집하지 않습니다. 아동이 당사의 타사 서비스를 통해 개인 데이터를 제공했다고 생각되면 연락해 주시기 바랍니다. 삭제를 도와드리겠습니다.',
    },
    {
      heading: '정책 변경',
      body: '당사는 수시로 본 개인정보 처리방침을 업데이트할 수 있습니다. 변경사항은 업데이트된 개정일자와 함께 이 페이지에 게시됩니다. 정기적으로 본 방침을 검토하시기를 권장합니다.',
    },
    {
      heading: '문의',
      body: '본 개인정보 처리방침에 관한 문의사항은 voiback.app@gmail.com으로 연락해 주시기 바랍니다.',
    },
  ],
};

export const getPrivacyContent = (locale: string): ContentSection[] => {
  return privacyContent[locale] || privacyContent.en;
};

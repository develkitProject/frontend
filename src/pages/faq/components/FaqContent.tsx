const FaqContents = {
  First: () => (
    <span>
      디벨킷은 별도의 회원가입 없이 임시계정으로 서비스를 체험할 수 있는
      <br />
      "체험하기" 기능을 제공하고 있습니다.
      <br />
      <div style={{ fontWeight: '500' }}>
        ( 체험하기 방법 - 메인 페이지{' '}
        <span style={{ color: '#00A99D' }}>&nbsp;"임시계정으로 체험하기" </span>
        )
      </div>
      <br />
      다만, 정보의 보호 및 원활한 프로젝트 사용을 위해서, <br />
      실제 서비스를 이용하시는 경우 회원가입이 꼭 필요합니다.
      <br />
      <br />
      카카오 계정 또는 이메일로 간편하게 회원가입이 가능하니 <br />
      회원가입을 통해 더욱 다양한 서비스를 이용해보세요. <br />
      <div style={{ fontWeight: '500' }}>
        ( 회원가입 방법 - 우측 상단{' '}
        <span style={{ color: '#F5D28C' }}>&nbsp; "JOIN"</span>)
      </div>
    </span>
  ),

  Second: () => (
    <span>
      새로운 프로젝트를 만드시거나
      <br />
      기존 프로젝트에 가입하시면 프로젝트내에서
      <br />
      채팅, 공지사항, 문서공유, 일정관리 기능을 이용하실 수 있습니다.
      <br />
      <br />
      <div style={{ fontWeight: '500' }}>
        ◽ 새 프로젝트 만들기
        <br />{' '}
      </div>
      프로젝트 메뉴에서{' '}
      <span style={{ color: '#00A99D', fontWeight: '500' }}>
        "+프로젝트생성하기"
      </span>{' '}
      버튼을 클릭하시면 됩니다.
      <br />
      <br />
      <div style={{ fontWeight: '500' }}>
        ◽ 기존 프로젝트 가입하기
        <br />{' '}
      </div>
      가입을 희망하는 프로젝트의 멤버로부터 초대코드를 안내 받은 후,
      <br />
      프로젝트 메뉴 상단의 초대코드 입력란에 <br />
      <span style={{ color: '#00A99D', fontWeight: '500' }}>
        {' '}
        "초대코드를 입력하고 GO"
      </span>
      를 클릭하시면 됩니다.
      <br />
      <br />
      <div style={{ fontWeight: '500' }}>
        ◽ 초대코드 확인하기
        <br />{' '}
      </div>
      프로젝트의 홈 또는 주소록 메뉴에 있는{' '}
      <span style={{ color: '#F5D28C', fontWeight: '500' }}>
        "초대코드확인"
      </span>{' '}
      버튼을 <br />
      클릭하면 초대코드를 확인하실 수 있습니다.
      <br />
      <br />
      <div style={{ fontWeight: '500' }}>
        ◽ 초대코드 복사하기
        <br />{' '}
      </div>
      초대코드를 확인하신 후{' '}
      <span style={{ color: '#F5D28C', fontWeight: '500' }}>
        "초대코드 복사하기"
      </span>{' '}
      버튼을 누르시면 <br />
      자동으로 코드가 복사됩니다. <br />
      복사된 초대코드를 초대하시고 싶은 멤버에게 전달해주세요.
    </span>
  ),

  Thrid: () => (
    <span>
      프로젝트의 수정 및 삭제는 프로젝트를 만든 사람만 가능합니다.
      <br />
      <br />
      <div style={{ fontWeight: '500' }}>
        ◽ 프로젝트 수정하기
        <br />{' '}
      </div>
      수정을 희망하시는 프로젝트에서 '프로젝트 정보' 메뉴를 클릭하신 후<br />
      상단의{' '}
      <span style={{ color: '#00A99D', fontWeight: '500' }}>
        {' '}
        "정보수정하기"
      </span>
      버튼을 클릭하시면 정보를 수정하실 수 있습니다.
      <br />
      <br />
      <div style={{ fontWeight: '500' }}>
        ◽ 프로젝트 삭제하기
        <br />{' '}
      </div>
      삭제를 희망하시는 프로젝트에서 '프로젝트 정보' 메뉴를 클릭하신 후<br />
      프로젝트 정보 맨 하단에 있는{' '}
      <span style={{ color: '#F5D28C', fontWeight: '500' }}>
        "프로젝트 삭제"
      </span>{' '}
      버튼을 누르시면
      <br />
      해당 프로젝트가 삭제됩니다. <br />
    </span>
  ),
  Fourth: () => (
    <span>
      회원정보의 수정 및 삭제는 로그인 후 마이페이지에서 가능합니다.
      <br />
      <br />
      <div style={{ fontWeight: '500' }}>
        ◽ 마이페이지
        <br />{' '}
      </div>
      우측 상단의 프로필 이미지를 클릭하시면 마이페이지로 이동하실 수 있습니다.{' '}
      <br />
      <br />
      <div style={{ fontWeight: '500' }}>
        ◽ 회원정보 수정하기
        <br />{' '}
      </div>
      마이페이지의 회원정보 메뉴를 클릭하시면
      <br />
      프로필 이미지 및 닉네임 수정이 가능합니다. (이메일 주소는 수정불가)
      <br />
      <br />
      <div style={{ fontWeight: '500' }}>
        ◽ 탈퇴하기
        <br />{' '}
      </div>
      마이페이지에서 회원정보 메뉴를 들어가신 후<br />
      왼쪽 하단에 있는 회원탈퇴를 클릭하시면 됩니다.
      <br />
    </span>
  ),
};

export default FaqContents;

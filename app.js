const express = require('express');
const models = require("./models/index");
const app = express();
const port = 3001;


models.sequelize.sync().then( () => {
    console.log(" DB 연결 성공");
}).catch(err => {
    console.log("연결 실패");
    console.log(err);
})

app.get('/', (req, res) => {
    
});

app.get('/NoticeTable', (req, res) => { // 게시글 화면
    models.NoticeTable_Category.findByPk(1).then(project => { //카테고리 조회, findByPk()안에는 req로 받아온 카테고리값이 들어갈 예정
        console.log(project.CategoryName);
        models.NoticeTable.findAll({ 
            where : {
                Notice_Category_Id : project.id
            }
        }).then(notice => {
            res.send(typeof(notice));
        });
    });
});

app.get('/NoticeTable/detail', (req, res) => { // 게시글 상세화면
    models.NoticeTable.findById(123).then(project => { //123 대신 req 들어갈 예정
        res.send(project);
      })
});

app.post('/NotcieTable/Create', (req,res) => { // 글작성
    models.NoticeTable.create({
        Notice_Category_Id: req, // select로 받거나, req를 통해 받아올 예정
        User_id: 1, // userid는 쿠키에 저장된 정보를 통해 select로 받아올예정
        Title: 'test', // req.title
        Content: 'test', // req.content
        Date: '2020-08-12', // javascript 함수이용
        View_count: 0 // 초기는 0으로 시작
    })
});

app.get('/NotcieTable/Update', (req,res) => { // 글업데이트
    models.NoticeTable.update({
        Notice_Category_Id: req, // select로 받거나, req를 통해 받아올 예정
        User_id: 1, // userid는 쿠키에 저장된 정보를 통해 select로 받아올예정
        Title: 'test', // req.title
        Content: 'test', // req.content
        Date: '2020-08-12', // javascript 함수이용
        View_count: 0 // 0으로 하면 안되고 현재 저장되어있는 조회수 정보 필요
    }, {
        where: {
            id: req //req로 받아올 예정
        }
    })
});

app.get('/NotcieTable/Delete', (req,res) => { // 글삭제
    //현재 삭제하려는 유저가 글을 작성한 유저와 동일한지 확인 필요
    models.NoticeTable.destroy({
        where: {
            id: req // req로 받아올 예정
        }
    })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
//   models.NoticeTable_Category.create({
//       CategoryName: '자유게시판'
//   })
    // models.User.create({
    //     UserName: 'ahn',
    //     UserID: 'ahn',
    //     UserPW: '1234',
    //     StudentNumber: 3,
    //     Access: 1,
    //     WR_Access: 1
    // })
});